/* 衛道圓夢營 - 速率練習系統邏輯 */
(function () {
  "use strict";

  const HISTORY_KEY = "weidao_speed_history_v1";
  const PLAYER_KEY = "weidao_current_player";
  const REQUIRED_PICKS = 10;
  const QUIZ_ID = "speed100";
  const AVATAR_GRADIENTS = [
    ["#2B69A6", "#3F87CB"],
    ["#646464", "#8A8A8A"],
    ["#0E9488", "#3DBFB0"],
    ["#D9840F", "#FFB020"],
    ["#1F4E7D", "#2B69A6"],
    ["#4A4A4A", "#646464"]
  ];

  const qs = (sel, root) => (root || document).querySelector(sel);
  const qsa = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const byId = (id) => QUESTION_BANK.find((q) => q.id === id);

  const state = {
    view: "dashboard",
    player: null,
    quiz: null
  };

  /* ---------------- helpers ---------------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return `${d.getFullYear()}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d
      .getDate()
      .toString()
      .padStart(2, "0")} ${d.getHours().toString().padStart(2, "0")}:${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  function hashStr(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h;
  }
  function avatarGradient(name) {
    const pair = AVATAR_GRADIENTS[hashStr(name) % AVATAR_GRADIENTS.length];
    return `linear-gradient(135deg, ${pair[0]}, ${pair[1]})`;
  }
  function avatarInitial(name) {
    return (name || "?").trim().charAt(0).toUpperCase();
  }

  let toastTimer = null;
  function toast(msg) {
    const el = qs("#toast");
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2200);
  }

  /* ---------------- history storage ---------------- */
  function loadHistory() {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  function saveHistory(list) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
  }
  function addHistoryRecord(record) {
    const list = loadHistory();
    list.push(record);
    saveHistory(list);
    return syncAttemptToCloud(record);
  }
  function myHistory() {
    return loadHistory().filter((r) => r.name === state.player);
  }

  /* ---------------- cloud sync (Firestore, shared across devices) ---------------- */
  function waitForCloudDB(timeoutMs) {
    return new Promise((resolve) => {
      if (window.CloudDB) return resolve(window.CloudDB);
      const onReady = () => {
        window.removeEventListener("clouddb-ready", onReady);
        resolve(window.CloudDB || null);
      };
      window.addEventListener("clouddb-ready", onReady);
      setTimeout(() => {
        window.removeEventListener("clouddb-ready", onReady);
        resolve(window.CloudDB || null);
      }, timeoutMs);
    });
  }

  async function syncAttemptToCloud(record) {
    const cloud = await waitForCloudDB(4000);
    if (!cloud) return false;
    return cloud.saveAttempt(record);
  }

  async function refreshHistoryFromCloud() {
    const cloud = await waitForCloudDB(4000);
    if (!cloud) return null;
    const records = await cloud.fetchAllAttempts();
    if (!records) return null;
    const mine = records.filter((r) => r.quiz === QUIZ_ID);
    saveHistory(mine);
    return mine;
  }

  /* ---------------- login gate ---------------- */
  function initLogin() {
    const saved = localStorage.getItem(PLAYER_KEY);
    if (saved) {
      enterApp(saved);
    } else {
      qs("#loginGate").classList.remove("is-hidden");
      qs("#appShell").classList.add("is-hidden");
    }

    qs("#loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = qs("#loginNameInput");
      const name = input.value.trim();
      if (!name) {
        input.classList.add("is-error");
        input.focus();
        setTimeout(() => input.classList.remove("is-error"), 350);
        return;
      }
      localStorage.setItem(PLAYER_KEY, name);
      enterApp(name);
    });

    qs("#switchUserBtn").addEventListener("click", () => {
      localStorage.removeItem(PLAYER_KEY);
      state.player = null;
      qs("#loginNameInput").value = "";
      qs("#appShell").classList.add("is-hidden");
      qs("#loginGate").classList.remove("is-hidden");
      qs("#loginNameInput").focus();
    });
  }

  function enterApp(name) {
    state.player = name;
    qs("#loginGate").classList.add("is-hidden");
    qs("#appShell").classList.remove("is-hidden");
    qs("#playerNameLabel").textContent = name;
    qs("#playerAvatar").textContent = avatarInitial(name);
    qs("#playerAvatar").style.background = avatarGradient(name);
    showView("dashboard");
  }

  /* ---------------- routing ---------------- */
  function showView(name) {
    state.view = name;
    qsa(".view").forEach((v) => v.classList.toggle("is-active", v.dataset.view === name));
    qsa(".nav-item").forEach((n) => n.classList.toggle("is-active", n.dataset.view === name));
    qs("#sidebar").classList.remove("is-open");
    window.scrollTo(0, 0);

    if (name === "dashboard") {
      renderDashboard();
      refreshHistoryFromCloud().then((r) => {
        if (r && state.view === "dashboard") renderDashboard();
      });
    }
    if (name === "history") {
      renderHistory();
      refreshHistoryFromCloud().then((r) => {
        if (r && state.view === "history") renderHistory();
      });
    }
    if (name === "leaderboard") {
      renderLeaderboard();
      const note = qs("#leaderboardSyncNote");
      if (note) note.textContent = "同步中…";
      refreshHistoryFromCloud().then((r) => {
        if (note) note.textContent = "";
        if (r && state.view === "leaderboard") renderLeaderboard();
      });
    }
  }

  function initNav() {
    qsa(".nav-item").forEach((btn) => {
      btn.addEventListener("click", () => showView(btn.dataset.view));
    });
    qsa("[data-goto]").forEach((btn) => {
      btn.addEventListener("click", () => showView(btn.dataset.goto));
    });
    qsa("[data-action='start-quiz']").forEach((btn) => {
      btn.addEventListener("click", () => startQuiz());
    });
    qs("#mobileToggle").addEventListener("click", () => {
      qs("#sidebar").classList.toggle("is-open");
    });
  }

  /* ---------------- trend chart (custom inline SVG) ---------------- */
  function buildTrendSVG(history, opts) {
    opts = opts || {};
    const w = opts.width || 640;
    const h = opts.height || 220;
    const padL = 34, padR = 16, padT = 16, padB = 28;
    const records = history.slice(-12);

    if (records.length === 0) {
      return `<div class="trend-chart-empty">尚無練習紀錄，開始你的第一次測驗吧！</div>`;
    }

    const innerW = w - padL - padR;
    const innerH = h - padT - padB;
    const stepX = records.length > 1 ? innerW / (records.length - 1) : 0;

    const pts = records.map((r, i) => {
      const x = padL + stepX * i;
      const y = padT + innerH * (1 - r.accuracy / 100);
      return { x, y, r };
    });

    const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const areaPath = `${linePath} L${pts[pts.length - 1].x.toFixed(1)},${(padT + innerH).toFixed(1)} L${pts[0].x.toFixed(1)},${(padT + innerH).toFixed(1)} Z`;

    const gridLines = [0, 25, 50, 75, 100]
      .map((v) => {
        const y = padT + innerH * (1 - v / 100);
        return `<line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="#E1E7EE" stroke-width="1"/>
                <text x="${padL - 8}" y="${y + 4}" font-size="10" fill="#99A4B0" text-anchor="end">${v}</text>`;
      })
      .join("");

    const labelEvery = records.length > 8 ? 2 : 1;
    const xLabels = pts
      .map((p, i) => {
        if (i % labelEvery !== 0 && i !== pts.length - 1) return "";
        const d = new Date(p.r.date);
        const label = `${d.getMonth() + 1}/${d.getDate()}`;
        return `<text x="${p.x}" y="${h - 8}" font-size="10" fill="#99A4B0" text-anchor="middle">${label}</text>`;
      })
      .join("");

    const dots = pts
      .map(
        (p) => `<circle class="trend-point" cx="${p.x}" cy="${p.y}" r="4" fill="#2B69A6" stroke="#fff" stroke-width="2">
          <title>${formatDate(p.r.date)} · ${p.r.score}/${p.r.total} (${p.r.accuracy}%)</title>
        </circle>`
      )
      .join("");

    return `<svg class="trend-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <defs>
        <linearGradient id="trendFillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2B69A6" stop-opacity="0.24"/>
          <stop offset="100%" stop-color="#2B69A6" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="trendLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3F87CB"/>
          <stop offset="100%" stop-color="#1B3F63"/>
        </linearGradient>
      </defs>
      ${gridLines}
      <path d="${areaPath}" fill="url(#trendFillGrad)" stroke="none"/>
      <path d="${linePath}" fill="none" stroke="url(#trendLineGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${dots}
      ${xLabels}
    </svg>`;
  }

  /* ---------------- dashboard ---------------- */
  const STAT_GRADS = {
    attempts: "linear-gradient(135deg,#3F87CB,#2B69A6)",
    accuracy: "linear-gradient(135deg,#0E9488,#3DBFB0)",
    streak: "linear-gradient(135deg,#FFB020,#FF6B4A)",
    coverage: "linear-gradient(135deg,#646464,#8A8A8A)"
  };

  function renderDashboard() {
    qs("#heroGreeting").textContent = `哈囉，${state.player}！準備好了嗎？`;

    const history = myHistory();
    const attempts = history.length;
    const avgAcc = attempts ? Math.round(history.reduce((s, r) => s + r.accuracy, 0) / attempts) : 0;
    const bestStreak = attempts ? Math.max(...history.map((r) => r.bestStreak)) : 0;
    const uniqueQ = new Set();
    history.forEach((r) => r.questionIds.forEach((id) => uniqueQ.add(id)));
    const coverage = Math.round((uniqueQ.size / QUESTION_BANK.length) * 100);

    qs("#statGrid").innerHTML = `
      ${statCard("iconTarget", STAT_GRADS.attempts, attempts, "累計練習次數")}
      ${statCard("iconCheck", STAT_GRADS.accuracy, avgAcc + "%", "平均正確率")}
      ${statCard("iconFlame", STAT_GRADS.streak, bestStreak, "歷史最佳連對")}
      ${statCard("iconBook", STAT_GRADS.coverage, coverage + "%", "題庫涵蓋率")}
    `;

    qs("#trendChartWrap").innerHTML = buildTrendSVG(history);

    const recent = history.slice(-5).reverse();
    if (recent.length === 0) {
      qs("#recentList").innerHTML = `<div class="empty-state"><p>尚無練習紀錄，開始你的第一次測驗吧！</p><button class="btn btn-primary" data-action="start-quiz">開始測驗</button></div>`;
      qs("#recentList [data-action='start-quiz']").addEventListener("click", () => startQuiz());
    } else {
      qs("#recentList").innerHTML = recent
        .map(
          (r) => `<div class="recent-row">
            <span class="recent-row-left">${formatDate(r.date)}</span>
            <span class="recent-badge">${r.score}/${r.total} · ${r.accuracy}%</span>
          </div>`
        )
        .join("");
    }
  }

  const ICONS = {
    iconTarget: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/>`,
    iconCheck: `<path d="M5 13l4 4L19 7"/>`,
    iconFlame: `<path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.3-2-.8-2.8.9.4 2.8 1.8 2.8 5.3a8 8 0 1 1-16 0C4 7 8 5 12 2Z" fill="currentColor" stroke="none"/>`,
    iconBook: `<path d="M4 5.5A2 2 0 0 1 6 3.5h12a2 2 0 0 1 2 2V19a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5.5Z"/><path d="M4 19a2 2 0 0 1 2-2h14"/>`
  };
  function statCard(icon, grad, val, label) {
    return `<div class="stat-card" style="--stat-grad:${grad}">
      <div class="stat-card-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${ICONS[icon]}</svg>
      </div>
      <div class="stat-card-val">${val}</div>
      <div class="stat-card-label">${label}</div>
    </div>`;
  }

  /* ---------------- quiz ---------------- */
  function startQuiz() {
    const ids = shuffle(QUESTION_BANK.map((q) => q.id)).slice(0, REQUIRED_PICKS);
    state.quiz = {
      ids,
      index: 0,
      answers: {},
      score: 0,
      streak: 0,
      bestStreak: 0,
      startTime: Date.now(),
      elapsedSec: 0,
      timerHandle: null,
      locked: false,
      finished: false,
      autoFinishTimer: null
    };
    state.quiz.timerHandle = setInterval(() => {
      state.quiz.elapsedSec = Math.floor((Date.now() - state.quiz.startTime) / 1000);
      qs("#quizTimer").textContent = formatTime(state.quiz.elapsedSec);
    }, 1000);

    showView("quiz");
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const quiz = state.quiz;
    quiz.locked = false;
    const total = quiz.ids.length;
    const q = byId(quiz.ids[quiz.index]);

    qs("#quizProgressFill").style.width = `${(quiz.index / total) * 100}%`;
    qs("#quizCounter").textContent = `第 ${quiz.index + 1} / ${total} 題`;
    qs("#quizTopic").textContent = q.topic || "速率";
    qs("#quizExtra").innerHTML = q.extra || "";
    qs("#quizText").innerHTML = q.text;

    const streakChip = qs("#streakChip");
    if (quiz.streak >= 2) {
      streakChip.hidden = false;
      qs("#streakVal").textContent = quiz.streak;
    } else {
      streakChip.hidden = true;
    }

    const optionsWrap = qs("#quizOptions");
    optionsWrap.innerHTML = Object.entries(q.options)
      .map(
        ([key, val]) => `<button class="quiz-option" data-key="${key}">
          <span class="quiz-option-key">${key}</span>
          <span class="quiz-option-body">${val}</span>
        </button>`
      )
      .join("");

    qsa(".quiz-option", optionsWrap).forEach((btn) => {
      btn.addEventListener("click", () => selectOption(btn.dataset.key));
    });

    qs("#quizFeedback").hidden = true;
    qs("#quizNextBtn").hidden = true;
    qs("#quizAutoNote").hidden = true;
  }

  function selectOption(key) {
    const quiz = state.quiz;
    if (quiz.locked) return;
    quiz.locked = true;

    const q = byId(quiz.ids[quiz.index]);
    const isCorrect = key === q.answer;
    quiz.answers[q.id] = { selected: key, correct: isCorrect };

    if (isCorrect) {
      quiz.score++;
      quiz.streak++;
      quiz.bestStreak = Math.max(quiz.bestStreak, quiz.streak);
    } else {
      quiz.streak = 0;
    }

    qsa(".quiz-option", qs("#quizOptions")).forEach((btn) => {
      btn.classList.add("is-locked");
      const k = btn.dataset.key;
      if (k === q.answer) btn.classList.add("is-correct");
      else if (k === key) btn.classList.add("is-wrong");
    });

    const fb = qs("#quizFeedback");
    fb.hidden = false;
    fb.className = `quiz-feedback ${isCorrect ? "correct" : "wrong"}`;
    fb.innerHTML = `<div class="quiz-feedback-title">${isCorrect ? "答對了！" : "答錯了，正確答案是（" + q.answer + "）"}</div>
      <div>${q.explanation}</div>`;

    const streakChip = qs("#streakChip");
    if (quiz.streak >= 2) {
      streakChip.hidden = false;
      qs("#streakVal").textContent = quiz.streak;
    } else {
      streakChip.hidden = true;
    }

    const isLast = quiz.index === quiz.ids.length - 1;
    const nextBtn = qs("#quizNextBtn");
    nextBtn.hidden = false;
    qs("#quizNextLabel").textContent = isLast ? "查看成績" : "下一題";

    const autoNote = qs("#quizAutoNote");
    if (isLast) {
      autoNote.hidden = false;
      quiz.autoFinishTimer = setTimeout(() => {
        if (state.view === "quiz") finishQuiz();
      }, 1800);
    } else {
      autoNote.hidden = true;
    }
  }

  function initQuizNext() {
    qs("#quizNextBtn").addEventListener("click", () => {
      const quiz = state.quiz;
      if (quiz.autoFinishTimer) {
        clearTimeout(quiz.autoFinishTimer);
        quiz.autoFinishTimer = null;
      }
      if (quiz.index === quiz.ids.length - 1) {
        finishQuiz();
      } else {
        quiz.index++;
        renderQuizQuestion();
      }
    });
  }

  function finishQuiz() {
    const quiz = state.quiz;
    if (quiz.finished) return;
    quiz.finished = true;
    if (quiz.autoFinishTimer) {
      clearTimeout(quiz.autoFinishTimer);
      quiz.autoFinishTimer = null;
    }
    clearInterval(quiz.timerHandle);
    qs("#quizProgressFill").style.width = "100%";

    const record = {
      quiz: QUIZ_ID,
      name: state.player,
      date: new Date().toISOString(),
      score: quiz.score,
      total: quiz.ids.length,
      accuracy: Math.round((quiz.score / quiz.ids.length) * 100),
      durationSec: quiz.elapsedSec,
      bestStreak: quiz.bestStreak,
      questionIds: quiz.ids.slice()
    };
    const cloudSaved = addHistoryRecord(record);

    renderResults(record, quiz);
    showView("results");

    cloudSaved
      .then(() => refreshHistoryFromCloud())
      .then((r) => {
        if (r && state.view === "results") updateRankCallout();
      });
  }

  function updateRankCallout() {
    const board = computeLeaderboard();
    const myRank = board.findIndex((r) => r.name === state.player) + 1;
    qs("#rankCallout").innerHTML = myRank
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 0 1-12 0V4Z"/></svg>
         你目前在排行榜排名第 <b>${myRank}</b> 名（共 ${board.length} 人挑戰過）`
      : "";
  }

  function renderResults(record, quiz) {
    qs("#scoreNum").textContent = `${record.score}/${record.total}`;
    qs("#scorePct").textContent = `${record.accuracy}%`;
    qs("#resDuration").textContent = formatTime(record.durationSec);
    qs("#resStreak").textContent = record.bestStreak;
    qs("#resAccuracy").textContent = `${record.accuracy}%`;

    const circumference = 2 * Math.PI * 60;
    const ring = qs("#ringFg");
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;
    requestAnimationFrame(() => {
      ring.style.strokeDashoffset = circumference - (record.accuracy / 100) * circumference;
    });

    let msg;
    if (record.accuracy >= 90) msg = "太棒了！你已經是速率換算高手了。";
    else if (record.accuracy >= 70) msg = "表現不錯，再多練習幾次會更穩！";
    else msg = "沒關係，檢討錯題後再挑戰一次吧！";
    qs("#resultsMsg").textContent = msg;

    updateRankCallout();

    qs("#reviewList").innerHTML = quiz.ids
      .map((id, i) => {
        const q = byId(id);
        const a = quiz.answers[id];
        return `<div class="review-item">
          <div class="review-item-head">
            <span class="review-badge ${a.correct ? "correct" : "wrong"}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">${
                a.correct ? '<path d="M5 12l4 4L19 6"/>' : '<path d="M6 6l12 12M18 6L6 18"/>'
              }</svg>
            </span>
            <span class="review-item-text">第 ${i + 1} 題．${q.text.replace(/<[^>]+>/g, "")}</span>
          </div>
          <div class="review-item-answers">
            <span>你的答案：<b>${a.selected}</b></span>
            <span>正確答案：<b>${q.answer}</b></span>
          </div>
          <div class="review-explain">${q.explanation}</div>
        </div>`;
      })
      .join("");
  }

  /* ---------------- history view ---------------- */
  function renderHistory() {
    const history = myHistory();
    qs("#historySub").textContent = `追蹤 ${state.player} 每一次練習的表現趨勢。`;
    qs("#trendChartWrapBig").innerHTML = buildTrendSVG(history, { width: 960, height: 260 });

    const tbody = qs("#historyTable tbody");
    const empty = qs("#historyEmpty");
    if (history.length === 0) {
      tbody.innerHTML = "";
      empty.hidden = false;
    } else {
      empty.hidden = true;
      tbody.innerHTML = history
        .slice()
        .reverse()
        .map(
          (r) => `<tr>
            <td>${formatDate(r.date)}</td>
            <td>${r.score}/${r.total}</td>
            <td>${r.accuracy}%</td>
            <td>${formatTime(r.durationSec)}</td>
            <td>${r.bestStreak}</td>
          </tr>`
        )
        .join("");
    }
  }

  function initHistoryActions() {
    qs("#clearHistoryBtn").addEventListener("click", () => {
      if (confirm("練習成績會同步保存在雲端排行榜，無法從這裡刪除。要清除的話請聯絡老師處理。")) {
        toast("成績已同步到雲端，無法自行清除");
      }
    });
  }

  /* ---------------- leaderboard ---------------- */
  function computeLeaderboard() {
    const history = loadHistory();
    const byName = new Map();
    history.forEach((r) => {
      if (!byName.has(r.name)) byName.set(r.name, []);
      byName.get(r.name).push(r);
    });

    const rows = [];
    byName.forEach((records, name) => {
      let best = records[0];
      records.forEach((r) => {
        if (
          r.accuracy > best.accuracy ||
          (r.accuracy === best.accuracy && r.durationSec < best.durationSec)
        ) {
          best = r;
        }
      });
      const last = records.reduce((a, b) => (new Date(b.date) > new Date(a.date) ? b : a));
      rows.push({
        name,
        bestAccuracy: best.accuracy,
        bestScore: `${best.score}/${best.total}`,
        bestDuration: best.durationSec,
        attempts: records.length,
        lastDate: last.date
      });
    });

    rows.sort((a, b) => {
      if (b.bestAccuracy !== a.bestAccuracy) return b.bestAccuracy - a.bestAccuracy;
      return a.bestDuration - b.bestDuration;
    });
    return rows;
  }

  function renderLeaderboard() {
    const board = computeLeaderboard();
    const podiumEl = qs("#podium");
    const top3 = board.slice(0, 3);

    if (top3.length === 0) {
      podiumEl.innerHTML = `<div class="podium-empty">還沒有人挑戰過，成為第一名吧！</div>`;
    } else {
      const medalIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16"><path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 0 1-12 0V4Z"/></svg>`;
      podiumEl.innerHTML = top3
        .map((r, i) => {
          const rankNum = i + 1;
          return `<div class="podium-card rank-${rankNum}">
            <div class="podium-medal">${rankNum === 1 ? medalIcon : "#" + rankNum}</div>
            <div class="podium-avatar" style="background:${avatarGradient(r.name)}">${avatarInitial(r.name)}</div>
            <div class="podium-name">${r.name}</div>
            <div class="podium-score">${r.bestScore} · ${r.bestAccuracy}%</div>
            <div class="podium-time">用時 ${formatTime(r.bestDuration)}</div>
          </div>`;
        })
        .join("");
    }

    const tbody = qs("#leaderboardTable tbody");
    const empty = qs("#leaderboardEmpty");
    if (board.length === 0) {
      tbody.innerHTML = "";
      empty.hidden = false;
    } else {
      empty.hidden = true;
      const medalClass = ["gold", "silver", "bronze"];
      tbody.innerHTML = board
        .map((r, i) => {
          const rankCls = medalClass[i] ? `rank-pill ${medalClass[i]}` : "rank-pill";
          const youTag = r.name === state.player ? `<span class="leader-you">你</span>` : "";
          return `<tr>
            <td><span class="${rankCls}">${i + 1}</span></td>
            <td><span class="leader-name-cell"><span class="leader-avatar-sm" style="background:${avatarGradient(r.name)}">${avatarInitial(r.name)}</span>${r.name}${youTag}</span></td>
            <td>${r.bestScore}</td>
            <td>${r.bestAccuracy}%</td>
            <td>${formatTime(r.bestDuration)}</td>
            <td>${r.attempts}</td>
            <td>${formatDate(r.lastDate)}</td>
          </tr>`;
        })
        .join("");
    }
  }

  /* ---------------- init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLogin();
    initNav();
    initQuizNext();
    initHistoryActions();
  });
})();
