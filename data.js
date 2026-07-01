/* 衛道圓夢營 - 代數式練習題庫（40 題單選）
   資料來源：私六-題目卷 / 私六-解析卷全
   frac()/mixed() 產生分數的 HTML，供題幹與選項使用 */

function frac(num, den) {
  return `<span class="frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
}
function mixed(sign, intPart, num, den, suffix) {
  return `${sign}${intPart}${frac(num, den)}${suffix || ""}`;
}

const QUESTION_BANK = [
  {
    id: 1,
    topic: "代數式的表示",
    extra: `<table class="q-table">
      <thead><tr><th></th><th>文字敘述</th><th>式子</th></tr></thead>
      <tbody>
        <tr><td>甲</td><td>比 x 小 9 的數</td><td>9－x</td></tr>
        <tr><td>乙</td><td>比 x 大 13 的數</td><td>x＋13</td></tr>
        <tr><td>丙</td><td>比 x 的 4 倍多 5 的數</td><td>4x＋5</td></tr>
        <tr><td>丁</td><td>比 x 的一半少 10 的數</td><td>${frac("1", "2")}（x－10）</td></tr>
      </tbody></table>`,
    text: "下列文字敘述與式子的對應，哪些正確？",
    options: { A: "甲乙丙丁", B: "乙丙丁", C: "甲丁", D: "乙丙" },
    answer: "D",
    explanation: `甲：比 x 小 9 的數應為 x－9，表中寫成 9－x，錯誤。丁：比 x 的一半少 10 的數應為 ${frac("1", "2")}x－10，表中寫成 ${frac("1", "2")}（x－10），錯誤。乙、丙皆正確，故選（Ｄ）。`
  },
  {
    id: 2,
    topic: "化簡同類項",
    text: "下列何者化簡後的結果為 8x？",
    options: { A: "3＋5x", B: "3x＋5x" },
    answer: "B",
    explanation: "3x＋5x＝8x，故選（Ｂ）。"
  },
  {
    id: 3,
    topic: "列式與代數式",
    text: "爸爸的體重是小明體重的 3 倍多 2 公斤，若爸爸的體重為 x 公斤，則小明的體重是多少公斤？",
    options: { A: `${frac("x＋2", "3")}`, B: "3x－2", C: "2x－3", D: `${frac("x－2", "3")}` },
    answer: "D",
    explanation: `x＝小明的體重×3＋2，所以 x－2＝小明的體重×3，小明的體重＝${frac("x－2", "3")}。`
  },
  {
    id: 4,
    topic: "連續整數問題",
    text: "有八個連續奇數，若最小的數為 x，則此八個連續奇數的和為何？",
    options: { A: "x＋14", B: "4x＋6", C: "8x＋56", D: "12x＋112" },
    answer: "C",
    explanation: "八個連續奇數依序為 x、x＋2、…、x＋14，全部相加＝8x＋56。"
  },
  {
    id: 5,
    topic: "化簡同類項",
    text: "下列何者為 6x－x 化簡後的結果？",
    options: { A: "5x", B: "6" },
    answer: "A",
    explanation: "6x－x＝5x，故選（Ａ）。"
  },
  {
    id: 6,
    topic: "分配律",
    text: "化簡 5（3x＋4）的過程，下列何者正確？",
    options: { A: "5×3x＋5×4", B: "5×3x＋4" },
    answer: "A",
    explanation: "依分配律，5（3x＋4）＝5×3x＋5×4，故選（Ａ）。"
  },
  {
    id: 7,
    topic: "幾何應用",
    text: "有一長方形的周長為 40，若長為 x，則此長方形的面積該如何表示？",
    options: { A: "20x", B: "x（20－x）", C: "40x", D: "x（40－x）" },
    answer: "B",
    explanation: `寬＝${frac("40", "2")}－x＝20－x，面積＝x（20－x）。`
  },
  {
    id: 8,
    topic: "生活情境（折扣）",
    extra: `<div class="q-notice">
      <div class="q-notice-title">公告</div>
      <p>因近期食材成本提高，故即日起：</p>
      <ol><li>披薩售價皆調漲 10%。</li><li>會員結帳優惠從打八五折調整為打九折。</li></ol>
    </div>`,
    text: "如圖為朵朵披薩屋的公告。若一個夏威夷披薩調漲前的售價為 x 元，則會員購買一個夏威夷披薩的花費，公告前後相差多少元？〔109．會考〕",
    options: { A: "0.05x", B: "0.09x", C: "0.14x", D: "0.15x" },
    answer: "C",
    explanation: "公告前會員價：0.85x。公告後會員價：x×(1＋10%)×0.9＝0.99x。相差＝0.99x－0.85x＝0.14x。"
  },
  {
    id: 9,
    topic: "生活情境（平均）",
    text: "小明 15 天共花了 x 張壹佰元與 6 個拾元，請問小明平均每天花多少元？",
    options: { A: "100x＋4", B: "20x＋20", C: `${frac("20x＋4", "3")}`, D: `${frac("20", "3")}x＋4` },
    answer: "D",
    explanation: `15 天共花了 (100x＋60) 元，平均每天花 ${frac("100x＋60", "15")}＝${frac("20x＋12", "3")}＝${frac("20", "3")}x＋4。`
  },
  {
    id: 10,
    topic: "幾何應用",
    extra: `<div class="q-diagram">
      <svg viewBox="0 0 220 140" width="220" height="140" role="img" aria-label="長方形與對角線示意圖">
        <rect x="24" y="22" width="160" height="96" fill="none" stroke="#2952E3" stroke-width="2"/>
        <line x1="24" y1="22" x2="184" y2="118" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="5,4"/>
        <text x="90" y="14" font-size="11" fill="#475569">長</text>
        <text x="196" y="74" font-size="11" fill="#475569">寬</text>
        <text x="70" y="62" font-size="11" fill="#475569">對角線 x</text>
      </svg>
      <p class="q-diagram-caption">虛線為長方形畫作的對角線</p>
    </div>`,
    text: `沛沛最近搬新家，想要在客廳掛一幅如圖所示的長方形畫作，已知這幅畫的長比這幅畫的對角線短 2 公分，且這幅畫的寬是長的 ${frac("2", "3")} 倍，若對角線的長度為 x 公分，則這幅畫的周長為多少公分？`,
    options: {
      A: `2（x＋2）＋2（${frac("2", "3")}x＋${frac("4", "3")}）`,
      B: `2（x－2）＋2（${frac("2", "3")}x－${frac("4", "3")}）`,
      C: `2（x＋2）＋2（${frac("2", "3")}x－${frac("4", "3")}）`,
      D: `2（x－2）＋2（${frac("2", "3")}x＋${frac("4", "3")}）`
    },
    answer: "B",
    explanation: `長為 (x－2) 公分，寬為 ${frac("2", "3")}(x－2) 公分，周長＝2(x－2)＋2[${frac("2", "3")}(x－2)]＝2(x－2)＋2(${frac("2", "3")}x－${frac("4", "3")})。`
  },
  {
    id: 11,
    topic: "單價與找零",
    text: "小毛買了 5 枝原子筆，若一打原子筆需要 a 元，則小毛付 100 元可找回多少錢？",
    options: { A: `100－${frac("5", "12")}a`, B: "100－5a", C: `100－${frac("a", "12")}`, D: `100－${frac("7", "12")}a` },
    answer: "A",
    explanation: `一枝原子筆為 ${frac("a", "12")} 元，100－5×${frac("a", "12")}＝100－${frac("5", "12")}a。`
  },
  {
    id: 12,
    topic: "工程問題",
    text: "一項工程需 x 天可做完，則做 3 天後，尚餘全工程的多少未做？",
    options: { A: `${frac("3", "x")}`, B: `${frac("x", "3")}`, C: `1－${frac("3", "x")}`, D: `1－${frac("x", "3")}` },
    answer: "C",
    explanation: `一天可做 ${frac("1", "x")}，做 3 天即做了 ${frac("3", "x")}，尚餘 1－${frac("3", "x")}。`
  },
  {
    id: 13,
    topic: "列式與代數式",
    text: "已知一架玩具飛機的售價是一輛玩具汽車的 3 倍少 20 元。若一架玩具飛機的價格是 x 元，則一輛玩具汽車的售價是多少元？",
    options: { A: `${frac("x－20", "3")}`, B: `${frac("x＋20", "3")}`, C: "3（x－20）", D: "3（x＋20）" },
    answer: "B",
    explanation: `x＝玩具汽車售價×3－20，玩具汽車售價＝${frac("x＋20", "3")}。`
  },
  {
    id: 14,
    topic: "位值概念",
    text: "有一個二位數 57，現在如果在 5 與 7 之間插入一個數字 x，而形成一個三位數（形如 5▢x▢7▢），則此三位數可以怎麼表示？",
    options: { A: "57＋10x", B: "507＋x", C: "57x", D: "507＋10x" },
    answer: "D",
    explanation: "百位數字 5、十位數字 x、個位數字 7，三位數＝5×100＋x×10＋7＝507＋10x。"
  },
  {
    id: 15,
    topic: "生活情境（存款）",
    text: "甲、乙、丙三人的存款是乙比甲多 80 元，丙比乙少 120 元，若假設甲的存款有 a 元，則下列哪一選項是正確的？",
    options: {
      A: "乙的存款有（a－80）元",
      B: "丙的存款有（a＋40）元",
      C: "丙的存款比甲少 80 元",
      D: "甲、乙、丙三人的存款共有（3a＋40）元"
    },
    answer: "D",
    explanation: "乙的存款是(a＋80)元，丙的存款是(a＋80)－120＝(a－40)元，三人共有 a＋(a＋80)＋(a－40)＝3a＋40 元。"
  },
  {
    id: 16,
    topic: "單價問題",
    text: "一打汽水賣 x 元，娜美只想買六瓶，請問娜美需要付多少元？",
    options: { A: `${frac("1", "2")}x`, B: `${frac("1", "3")}x`, C: `${frac("1", "4")}x`, D: `${frac("1", "6")}x` },
    answer: "A",
    explanation: `一打有 12 瓶，1 瓶賣 ${frac("x", "12")} 元，6 瓶賣 ${frac("x", "12")}×6＝${frac("x", "2")} 元。`
  },
  {
    id: 17,
    topic: "幾何應用",
    extra: `<div class="q-diagram">
      <svg viewBox="0 0 240 190" width="240" height="190" role="img" aria-label="直角多邊形示意圖">
        <polygon points="40,170 40,80 120,80 120,30 210,30 210,170" fill="none" stroke="#2952E3" stroke-width="2" stroke-linejoin="round"/>
        <text x="14" y="128" font-size="12" fill="#475569">3</text>
        <text x="62" y="72" font-size="12" fill="#475569">x＋3</text>
        <text x="128" y="58" font-size="12" fill="#475569">3x－5</text>
        <text x="216" y="102" font-size="12" fill="#475569">5</text>
      </svg>
      <p class="q-diagram-caption">圖中每個角皆為直角</p>
    </div>`,
    text: "如圖，每個角都是直角，則此多邊形的周長為何？",
    options: { A: "8x＋6", B: "8x＋4", C: "8x＋10", D: "8x＋12" },
    answer: "A",
    explanation: "周長＝2×[(x＋3)＋(3x－5)＋5]＝2×(4x＋3)＝8x＋6。"
  },
  {
    id: 18,
    topic: "生活情境（折扣方程式）",
    extra: `<div class="q-comic">
      <div class="chat-bubble left"><span class="chat-role">顧客甲</span>這 2 瓶幫我結帳。</div>
      <div class="chat-bubble right"><span class="chat-role">店員</span>汽水正在促銷，買 2 瓶打 9 折，買 3 瓶打 8 折喔！</div>
      <div class="chat-bubble left"><span class="chat-role">顧客乙</span>那我再拿 1 瓶，要多付多少錢？</div>
      <div class="chat-bubble right"><span class="chat-role">店員</span>只要多 18 元喔！</div>
    </div>`,
    text: "如圖為小豪到超商購買飲料的經過。若每瓶汽水的原價為 a 元，則根據圖中的內容可以列出下列哪一個方程式？〔109．會考補考〕",
    options: { A: "2a＋18＝3a×0.8", B: "2a－18＝3a×0.8", C: "2a×0.9＋18＝3a×0.8", D: "2a×0.9－18＝3a×0.8" },
    answer: "C",
    explanation: "2 瓶售價＝2a×0.9，3 瓶售價＝3a×0.8，依題意得 2a×0.9＋18＝3a×0.8。"
  },
  {
    id: 19,
    topic: "年齡問題",
    text: "父親的年齡是 33 歲，兒子的年齡是 6 歲，則 x 年後，兩人年齡的和為下列何者？",
    options: { A: "6＋x", B: "33＋x", C: "39＋x", D: "39＋2x" },
    answer: "D",
    explanation: "x 年後父親為(33＋x)歲，兒子為(6＋x)歲，年齡和＝33＋x＋6＋x＝39＋2x。"
  },
  {
    id: 20,
    topic: "代數式的等價變形",
    text: `請問 ${mixed("－", "2", "3", "5", "x")} 與下列何者相等？`,
    options: {
      A: `－2．${frac("3", "5")}．x`,
      B: `－2＋${frac("3", "5")}＋x`,
      C: `（－2＋${frac("3", "5")}）x`,
      D: `－（2＋${frac("3", "5")}）x`
    },
    answer: "D",
    explanation: `${mixed("－", "2", "3", "5", "")} x 是帶分數乘以 x，等於 －(2＋${frac("3", "5")})x，故選（Ｄ）。`
  },
  {
    id: 21,
    topic: "生活情境（金錢）",
    text: "小寶的撲滿內有 x 個 10 元和 3 個 5 元及 5 個 1 元，則小寶的撲滿內有多少錢？",
    options: { A: "10x＋20", B: "10x＋8", C: "x＋8", D: "x＋20" },
    answer: "A",
    explanation: "10x＋3×5＋5×1＝10x＋20。"
  },
  {
    id: 22,
    topic: "列式與代數式",
    text: "上課時，從美美（為女生）眼中所見的女生人數為男生的 3 倍，若女生共有 x 人，則男生有多少人？",
    options: { A: "3（x－1）", B: "3（x＋1）", C: `${frac("x－1", "3")}`, D: `${frac("x＋1", "3")}` },
    answer: "C",
    explanation: `美美看到的女生人數為 x－1 人，3×男生人數＝x－1，男生人數＝${frac("x－1", "3")}。`
  },
  {
    id: 23,
    topic: "去括號",
    text: "把－2（3x－2）去括號之後，可得到下列哪一個式子？",
    options: { A: "－6x＋4", B: "－6x－4", C: "－6x－2", D: "－6x＋2" },
    answer: "A",
    explanation: "－2（3x－2）＝－6x＋4。"
  },
  {
    id: 24,
    topic: "生活情境（折扣）",
    text: `百貨公司開幕舉辦促銷活動，將原價 x 元的衣服改為 ${frac("4", "5")}（x－200），請問下列哪一個敘述可以作為此間百貨公司的促銷標語？`,
    options: { A: "打四折後再減 200 元", B: "減 200 元後再打四折", C: "打八折後再減 200 元", D: "減 200 元之後再打八折" },
    answer: "D",
    explanation: `${frac("4", "5")}（x－200）＝0.8（x－200），代表先減 200 元，再打八折。`
  },
  {
    id: 25,
    topic: "幾何應用",
    text: "已知珍愛社區某棟大樓共有 20 層樓，其中一樓樓高為 4 公尺，其餘樓層樓高皆相同。若該棟大樓高度為 y 公尺（不包含頂樓），則其餘每層樓高為多少公尺？",
    options: {
      A: `（${frac("y", "20")}－4）公尺`,
      B: `（${frac("y－4", "20")}）公尺`,
      C: `（${frac("y", "19")}－4）公尺`,
      D: `（${frac("y－4", "19")}）公尺`
    },
    answer: "D",
    explanation: `扣除一樓 4 公尺後，剩 19 層樓共 (y－4) 公尺，每層樓高＝${frac("y－4", "19")} 公尺。`
  },
  {
    id: 26,
    topic: "代數式的意義",
    text: "小玫每天可以看書 x 頁，那麼（100－2x）頁可以代表下列何者？",
    options: {
      A: "看書 2 天的總頁數",
      B: "書本的總頁數",
      C: "已經看了 100 頁後，再看 2 天後剩下的頁數",
      D: "書本原有 100 頁，看 2 天後所剩下的頁數"
    },
    answer: "D",
    explanation: "每天看 x 頁，書本原有 100 頁，看 2 天後剩下 (100－2x) 頁。"
  },
  {
    id: 27,
    topic: "生活情境（計費）",
    extra: `<table class="q-table">
      <thead><tr><th>停車時段</th><th>收費方式</th></tr></thead>
      <tbody>
        <tr><td>08：00～20：00</td><td>20 元／小時，該時段最多收 100 元</td></tr>
        <tr><td>20：00～08：00</td><td>5 元／小時，該時段最多收 30 元</td></tr>
        <tr><td colspan="2">若進場與離場時間不在同一時段，則兩時段分別計費</td></tr>
      </tbody></table>`,
    text: "樂樂停車場為 24 小時營業，其收費方式如表所示。已知阿虹某日 10：00 進場停車，停了 x 小時後離場，x 為整數。若阿虹離場的時間介於當日的 20：00～24：00 間，則他此次停車的費用為多少元？〔112．會考〕",
    options: { A: "5x＋30", B: "5x＋50", C: "5x＋150", D: "5x＋200" },
    answer: "B",
    explanation: "10：00～20：00 共 10 小時，收滿 100 元；20：00 後以 5 元／小時計費 (x－10) 小時，總費用＝100＋5(x－10)＝5x＋50。"
  },
  {
    id: 28,
    topic: "生活情境（折扣）",
    extra: `<div class="q-notice">
      <div class="q-notice-title">公告</div>
      <p>因近期食材成本提高，故即日起：</p>
      <ol><li>牛肉麵售價皆調漲 10%。</li><li>外帶優惠從打八五折調整為打九折。</li></ol>
    </div>`,
    text: "附圖為牛肉麵店的公告。若一碗牛肉麵調漲前的售價為 x 元，則外帶一碗牛肉麵的花費，公告前後相差多少元？",
    options: { A: "0.05x 元", B: "0.09x 元", C: "0.14x 元", D: "0.15x 元" },
    answer: "C",
    explanation: "1.1x×0.9－0.85x＝0.99x－0.85x＝0.14x（元）。"
  },
  {
    id: 29,
    topic: "代數式的意義",
    text: "下列四個敘述，哪一個是正確的？〔92．基測Ⅰ〕",
    options: {
      A: "3x 表示 3＋x",
      B: "x² 表示 x＋x",
      C: "3x² 表示 3x×3x",
      D: "3x＋5 表示 x＋x＋x＋5"
    },
    answer: "D",
    explanation: "3x＝3×x≠3＋x；x²＝x×x≠x＋x；3x²＝3×x×x≠3x×3x；3x＋5＝x＋x＋x＋5，故選（Ｄ）。"
  },
  {
    id: 30,
    topic: "生活情境（金錢）",
    text: "撲滿內有 x 個 10 元和 10 個 5 元，則撲滿內共有多少錢？",
    options: { A: "x＋5", B: "x＋50", C: "10x＋5", D: "10x＋50" },
    answer: "D",
    explanation: "10x＋10×5＝10x＋50。"
  },
  {
    id: 31,
    topic: "生活情境（利潤）",
    text: "金好用文具行先將一支成本 x 元的圓規加三成作為定價，然後再依定價打九折出售，則金好用文具行每賣一支圓規可賺或賠多少元？",
    options: { A: "賠 0.27x 元", B: "賺 0.17x 元", C: "賺 0.27x 元", D: "賺 0.3x 元" },
    answer: "B",
    explanation: "x×(1＋0.3)×0.9－x＝1.17x－x＝0.17x，故賺 0.17x 元。"
  },
  {
    id: 32,
    topic: "代數式的意義",
    text: "下列何者是錯誤的？",
    options: {
      A: "x＋x＝2x",
      B: "x＋x＋x＋5＝3x＋5",
      C: "a×a×a＝a³",
      D: `3${frac("1", "8")}x＝3×${frac("1", "8")}×x`
    },
    answer: "D",
    explanation: `左式＝3又${frac("1", "8")}倍的 x＝${frac("25", "8")}x，右式＝${frac("3", "8")}x，左式≠右式。`
  },
  {
    id: 33,
    topic: "位值概念",
    text: "有一個三位數，百位數為 3，十位數為 x，個位數為 8，則下列何者可表示此三位數的值？",
    options: { A: "x38", B: "x．3．8", C: "100x＋38", D: "10x＋308" },
    answer: "D",
    explanation: "此三位數為 3×100＋x×10＋8＝300＋10x＋8＝10x＋308。"
  },
  {
    id: 34,
    topic: "列式與代數式",
    text: `已知哥哥的身高恰好是妹妹的 ${frac("5", "4")} 倍，若哥哥的身高為 x 公分，則妹妹的身高為多少公分？`,
    options: { A: `${frac("1", "5")}x`, B: `${frac("4", "5")}x`, C: `${frac("5", "4")}x`, D: "5x" },
    answer: "B",
    explanation: `x＝妹妹身高×${frac("5", "4")}，妹妹身高＝x÷${frac("5", "4")}＝${frac("4", "5")}x。`
  },
  {
    id: 35,
    topic: "化簡同類項",
    text: `化簡 ${frac("1", "4")}x＋${frac("1", "3")}x＋3 的結果為何？`,
    options: { A: `${frac("1", "7")}x＋3`, B: `${frac("2", "7")}x＋3`, C: `${frac("1", "12")}x＋3`, D: `${frac("7", "12")}x＋3` },
    answer: "D",
    explanation: `(${frac("1", "4")}＋${frac("1", "3")})x＋3＝${frac("7", "12")}x＋3。`
  },
  {
    id: 36,
    topic: "幾何應用",
    text: "有一等腰三角形，若底角為 x 度，則頂角為多少度？",
    options: { A: `90＋${frac("x", "2")}`, B: `90－${frac("x", "2")}`, C: "180－2x", D: "90－x" },
    answer: "C",
    explanation: "三角形內角和 180 度，頂角＝180－x－x＝180－2x。"
  },
  {
    id: 37,
    topic: "代數式的意義",
    text: "翰翰每天固定花 x 元，則（1000－10x）元可以代表下列哪一個選項中描述的錢數？",
    options: {
      A: "翰翰 90 天所花的錢數",
      B: "翰翰 10 天所花的總錢數",
      C: "翰翰有 1000 元",
      D: "翰翰原有 1000 元，則經過 10 天後所剩下的錢數"
    },
    answer: "D",
    explanation: "每天固定花 x 元，10 天花 10x 元，若原有 1000 元，則剩下 (1000－10x) 元。"
  },
  {
    id: 38,
    topic: "年齡問題",
    text: "已知文彤今年 x 歲，且爸爸年齡比媽媽大。若爸爸的年齡是文彤的 5 倍少 2 歲，媽媽的年齡是文彤的 4 倍多 6 歲，則文彤的爸爸和媽媽相差多少歲？",
    options: { A: "x－4", B: "x－8", C: "x＋4", D: "x＋8" },
    answer: "B",
    explanation: "相差＝(5x－2)－(4x＋6)＝x－8（歲）。"
  },
  {
    id: 39,
    topic: "列式與代數式",
    text: "一繩子摺成 5 段後比博禮的身高多 3 公分，若博禮身高為 x 公分，則繩長為幾公分？",
    options: { A: "5x＋3", B: "5x＋15", C: "5x－3", D: "5x－15" },
    answer: "B",
    explanation: "每段長為 (x＋3) 公分，繩長＝5×(x＋3)＝5x＋15。"
  },
  {
    id: 40,
    topic: "代數式的意義",
    text: `下列敘述，有幾個是正確的？(甲) ${mixed("1", "", "3", "5", "x")} 表示 1＋${frac("3", "5")}x；(乙)（3x）×${frac("3", "4")} 表示 ${mixed("3", "", "3", "4", "x")}；(丙) ${frac("5x－2", "8")} 表示（5x）÷8－2÷8；(丁) 2x－5 表示 x＋x－5。`,
    options: { A: "1", B: "2", C: "3", D: "4" },
    answer: "B",
    explanation: "正確的是(丙)、(丁)，共 2 個。(甲)應表示 1＋(3/5)x 才對，此處寫的是帶分數乘 x 的意思，實際上兩者不同；(乙)（3x）×(3/4) 應等於 (9/4)x，與 3(3/4)x 不同。"
  }
];
