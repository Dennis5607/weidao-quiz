/* 衛道圓夢營 - 速率換算與追及題庫（100 題單選） */

const QUESTION_BANK = [
  {
    id: 1,
    topic: "速率單位換算",
    text: "90 公里/時 = ? 公里/分",
    options: { A: "0.15", B: "1.5", C: "15", D: "150" },
    answer: "B",
    explanation: "90÷60＝1.5（公里/分）"
  },
  {
    id: 2,
    topic: "速率單位換算",
    text: "60 公里/時 = ? 公尺/分",
    options: { A: "100", B: "500", C: "1000", D: "3600" },
    answer: "C",
    explanation: "60×1000÷60＝1000（公尺/分）"
  },
  {
    id: 3,
    topic: "速率單位換算",
    text: "72 公里/時 = ? 公尺/秒",
    options: { A: "12", B: "20", C: "30", D: "72" },
    answer: "B",
    explanation: "72÷3.6＝20（公尺/秒）"
  },
  {
    id: 4,
    topic: "速率單位換算",
    text: "108 公里/時 = ? 公尺/秒",
    options: { A: "20", B: "30", C: "60", D: "108" },
    answer: "B",
    explanation: "108÷3.6＝30（公尺/秒）"
  },
  {
    id: 5,
    topic: "速率單位換算",
    text: "36 公里/時 = ? 公尺/秒",
    options: { A: "5", B: "10", C: "15", D: "20" },
    answer: "B",
    explanation: "36÷3.6＝10（公尺/秒）"
  },
  {
    id: 6,
    topic: "速率單位換算",
    text: "144 公里/時 = ? 公尺/秒",
    options: { A: "30", B: "40", C: "50", D: "60" },
    answer: "B",
    explanation: "144÷3.6＝40（公尺/秒）"
  },
  {
    id: 7,
    topic: "速率單位換算",
    text: "45 公里/時 = ? 公尺/分",
    options: { A: "450", B: "750", C: "900", D: "1000" },
    answer: "B",
    explanation: "45×1000÷60＝750（公尺/分）"
  },
  {
    id: 8,
    topic: "速率單位換算",
    text: "18 公里/時 = ? 公尺/秒",
    options: { A: "3", B: "5", C: "6", D: "10" },
    answer: "B",
    explanation: "18÷3.6＝5（公尺/秒）"
  },
  {
    id: 9,
    topic: "速率單位換算",
    text: "54 公里/時 = ? 公尺/秒",
    options: { A: "9", B: "12", C: "15", D: "18" },
    answer: "C",
    explanation: "54÷3.6＝15（公尺/秒）"
  },
  {
    id: 10,
    topic: "速率單位換算",
    text: "90 公里/時 = ? 公尺/秒",
    options: { A: "20", B: "25", C: "30", D: "50" },
    answer: "B",
    explanation: "90÷3.6＝25（公尺/秒）"
  },
  {
    id: 11,
    topic: "速率單位換算",
    text: "24 公里/時 = ? 公里/分",
    options: { A: "0.24", B: "0.4", C: "2.4", D: "4" },
    answer: "B",
    explanation: "24÷60＝0.4（公里/分）"
  },
  {
    id: 12,
    topic: "速率單位換算",
    text: "12 公里/時 = ? 公尺/分",
    options: { A: "100", B: "150", C: "200", D: "720" },
    answer: "C",
    explanation: "12×1000÷60＝200（公尺/分）"
  },
  {
    id: 13,
    topic: "速率單位換算",
    text: "180 公里/時 = ? 公尺/秒",
    options: { A: "40", B: "50", C: "60", D: "180" },
    answer: "B",
    explanation: "180÷3.6＝50（公尺/秒）"
  },
  {
    id: 14,
    topic: "速率單位換算",
    text: "6 公里/時 = ? 公尺/分",
    options: { A: "60", B: "100", C: "360", D: "600" },
    answer: "B",
    explanation: "6×1000÷60＝100（公尺/分）"
  },
  {
    id: 15,
    topic: "速率單位換算",
    text: "3.6 公里/時 = ? 公尺/秒",
    options: { A: "1", B: "3.6", C: "6", D: "10" },
    answer: "A",
    explanation: "3.6÷3.6＝1（公尺/秒）"
  },
  {
    id: 16,
    topic: "速率單位換算",
    text: "63 公里/時 = ? 公尺/秒",
    options: { A: "15", B: "17.5", C: "21", D: "175" },
    answer: "B",
    explanation: "63÷3.6＝17.5（公尺/秒）"
  },
  {
    id: 17,
    topic: "速率單位換算",
    text: "27 公里/時 = ? 公尺/秒",
    options: { A: "5", B: "7.5", C: "9", D: "45" },
    answer: "B",
    explanation: "27÷3.6＝7.5（公尺/秒）"
  },
  {
    id: 18,
    topic: "速率單位換算",
    text: "15 公里/時 = ? 公尺/分",
    options: { A: "150", B: "250", C: "500", D: "900" },
    answer: "B",
    explanation: "15×1000÷60＝250（公尺/分）"
  },
  {
    id: 19,
    topic: "速率單位換算",
    text: "84 公里/時 = ? 公里/分",
    options: { A: "0.84", B: "1.4", C: "14", D: "140" },
    answer: "B",
    explanation: "84÷60＝1.4（公里/分）"
  },
  {
    id: 20,
    topic: "速率單位換算",
    text: "48 公里/時 = ? 公里/分",
    options: { A: "0.48", B: "0.8", C: "8", D: "48" },
    answer: "B",
    explanation: "48÷60＝0.8（公里/分）"
  },
  {
    id: 21,
    topic: "速率單位換算",
    text: "15 公尺/秒 = ? 公里/時",
    options: { A: "27", B: "45", C: "54", D: "60" },
    answer: "C",
    explanation: "15×3.6＝54（公里/時）"
  },
  {
    id: 22,
    topic: "速率單位換算",
    text: "20 公尺/秒 = ? 公里/時",
    options: { A: "60", B: "72", C: "100", D: "120" },
    answer: "B",
    explanation: "20×3.6＝72（公里/時）"
  },
  {
    id: 23,
    topic: "速率單位換算",
    text: "10 公尺/秒 = ? 公里/時",
    options: { A: "18", B: "30", C: "36", D: "60" },
    answer: "C",
    explanation: "10×3.6＝36（公里/時）"
  },
  {
    id: 24,
    topic: "速率單位換算",
    text: "25 公尺/秒 = ? 公里/時",
    options: { A: "75", B: "90", C: "100", D: "150" },
    answer: "B",
    explanation: "25×3.6＝90（公里/時）"
  },
  {
    id: 25,
    topic: "速率單位換算",
    text: "5 公尺/秒 = ? 公尺/分",
    options: { A: "60", B: "150", C: "300", D: "600" },
    answer: "C",
    explanation: "5×60＝300（公尺/分）"
  },
  {
    id: 26,
    topic: "速率單位換算",
    text: "8 公尺/秒 = ? 公尺/分",
    options: { A: "48", B: "240", C: "480", D: "800" },
    answer: "C",
    explanation: "8×60＝480（公尺/分）"
  },
  {
    id: 27,
    topic: "速率單位換算",
    text: "6 公尺/秒 = ? 公里/時",
    options: { A: "18", B: "21.6", C: "30", D: "60" },
    answer: "B",
    explanation: "6×3.6＝21.6（公里/時）"
  },
  {
    id: 28,
    topic: "速率單位換算",
    text: "30 公尺/秒 = ? 公里/時",
    options: { A: "60", B: "90", C: "108", D: "180" },
    answer: "C",
    explanation: "30×3.6＝108（公里/時）"
  },
  {
    id: 29,
    topic: "速率單位換算",
    text: "12 公尺/秒 = ? 公里/時",
    options: { A: "30", B: "43.2", C: "60", D: "72" },
    answer: "B",
    explanation: "12×3.6＝43.2（公里/時）"
  },
  {
    id: 30,
    topic: "速率單位換算",
    text: "40 公尺/秒 = ? 公里/時",
    options: { A: "100", B: "120", C: "144", D: "200" },
    answer: "C",
    explanation: "40×3.6＝144（公里/時）"
  },
  {
    id: 31,
    topic: "速率單位換算",
    text: "3 公尺/秒 = ? 公尺/分",
    options: { A: "60", B: "100", C: "180", D: "300" },
    answer: "C",
    explanation: "3×60＝180（公尺/分）"
  },
  {
    id: 32,
    topic: "速率單位換算",
    text: "12 公尺/秒 = ? 公尺/分",
    options: { A: "200", B: "360", C: "720", D: "1200" },
    answer: "C",
    explanation: "12×60＝720（公尺/分）"
  },
  {
    id: 33,
    topic: "速率單位換算",
    text: "4 公尺/秒 = ? 公里/時",
    options: { A: "12", B: "14.4", C: "20", D: "24" },
    answer: "B",
    explanation: "4×3.6＝14.4（公里/時）"
  },
  {
    id: 34,
    topic: "速率單位換算",
    text: "50 公尺/秒 = ? 公里/時",
    options: { A: "100", B: "150", C: "180", D: "300" },
    answer: "C",
    explanation: "50×3.6＝180（公里/時）"
  },
  {
    id: 35,
    topic: "速率單位換算",
    text: "2 公尺/秒 = ? 公尺/分",
    options: { A: "60", B: "100", C: "120", D: "200" },
    answer: "C",
    explanation: "2×60＝120（公尺/分）"
  },
  {
    id: 36,
    topic: "速率單位換算",
    text: "10 公尺/秒 = ? 公尺/分",
    options: { A: "300", B: "600", C: "900", D: "1000" },
    answer: "B",
    explanation: "10×60＝600（公尺/分）"
  },
  {
    id: 37,
    topic: "速率單位換算",
    text: "25 公尺/秒 = ? 公尺/分",
    options: { A: "750", B: "1000", C: "1500", D: "3000" },
    answer: "C",
    explanation: "25×60＝1500（公尺/分）"
  },
  {
    id: 38,
    topic: "速率單位換算",
    text: "7 公尺/秒 = ? 公里/時",
    options: { A: "21", B: "25.2", C: "30", D: "42" },
    answer: "B",
    explanation: "7×3.6＝25.2（公里/時）"
  },
  {
    id: 39,
    topic: "速率單位換算",
    text: "16 公尺/秒 = ? 公里/時",
    options: { A: "48", B: "54", C: "57.6", D: "60" },
    answer: "C",
    explanation: "16×3.6＝57.6（公里/時）"
  },
  {
    id: 40,
    topic: "速率單位換算",
    text: "100 公尺/秒 = ? 公里/時",
    options: { A: "300", B: "360", C: "600", D: "3600" },
    answer: "B",
    explanation: "100×3.6＝360（公里/時）"
  },
  {
    id: 41,
    topic: "速率單位換算",
    text: "1200 公尺/分 = ? 公里/時",
    options: { A: "12", B: "60", C: "72", D: "120" },
    answer: "C",
    explanation: "1200×60÷1000＝72（公里/時）"
  },
  {
    id: 42,
    topic: "速率單位換算",
    text: "900 公尺/分 = ? 公里/時",
    options: { A: "15", B: "45", C: "54", D: "90" },
    answer: "C",
    explanation: "900×60÷1000＝54（公里/時）"
  },
  {
    id: 43,
    topic: "速率單位換算",
    text: "600 公尺/分 = ? 公里/時",
    options: { A: "10", B: "36", C: "60", D: "100" },
    answer: "B",
    explanation: "600×60÷1000＝36（公里/時）"
  },
  {
    id: 44,
    topic: "速率單位換算",
    text: "450 公尺/分 = ? 公里/時",
    options: { A: "15", B: "25", C: "27", D: "45" },
    answer: "C",
    explanation: "450×60÷1000＝27（公里/時）"
  },
  {
    id: 45,
    topic: "速率單位換算",
    text: "300 公尺/分 = ? 公尺/秒",
    options: { A: "3", B: "5", C: "6", D: "10" },
    answer: "B",
    explanation: "300÷60＝5（公尺/秒）"
  },
  {
    id: 46,
    topic: "速率單位換算",
    text: "720 公尺/分 = ? 公尺/秒",
    options: { A: "6", B: "10", C: "12", D: "20" },
    answer: "C",
    explanation: "720÷60＝12（公尺/秒）"
  },
  {
    id: 47,
    topic: "速率單位換算",
    text: "240 公尺/分 = ? 公尺/秒",
    options: { A: "2", B: "4", C: "6", D: "40" },
    answer: "B",
    explanation: "240÷60＝4（公尺/秒）"
  },
  {
    id: 48,
    topic: "速率單位換算",
    text: "5400 公尺/分 = ? 公里/分",
    options: { A: "0.54", B: "5.4", C: "54", D: "540" },
    answer: "B",
    explanation: "5400÷1000＝5.4（公里/分）"
  },
  {
    id: 49,
    topic: "速率單位換算",
    text: "2250 公尺/分 = ? 公里/時",
    options: { A: "37.5", B: "90", C: "135", D: "225" },
    answer: "C",
    explanation: "2250×60÷1000＝135（公里/時）"
  },
  {
    id: 50,
    topic: "速率單位換算",
    text: "3600 公尺/分 = ? 公里/時",
    options: { A: "60", B: "100", C: "216", D: "360" },
    answer: "C",
    explanation: "3600×60÷1000＝216（公里/時）"
  },
  {
    id: 51,
    topic: "速率單位換算",
    text: "180 公尺/分 = ? 公尺/秒",
    options: { A: "2", B: "3", C: "30", D: "60" },
    answer: "B",
    explanation: "180÷60＝3（公尺/秒）"
  },
  {
    id: 52,
    topic: "速率單位換算",
    text: "480 公尺/分 = ? 公尺/秒",
    options: { A: "4", B: "6", C: "8", D: "80" },
    answer: "C",
    explanation: "480÷60＝8（公尺/秒）"
  },
  {
    id: 53,
    topic: "速率單位換算",
    text: "150 公尺/分 = ? 公里/時",
    options: { A: "9", B: "15", C: "25", D: "90" },
    answer: "A",
    explanation: "150×60÷1000＝9（公里/時）"
  },
  {
    id: 54,
    topic: "速率單位換算",
    text: "800 公尺/分 = ? 公里/時",
    options: { A: "24", B: "40", C: "48", D: "80" },
    answer: "C",
    explanation: "800×60÷1000＝48（公里/時）"
  },
  {
    id: 55,
    topic: "速率單位換算",
    text: "100 公尺/分 = ? 公里/時",
    options: { A: "6", B: "10", C: "60", D: "100" },
    answer: "A",
    explanation: "100×60÷1000＝6（公里/時）"
  },
  {
    id: 56,
    topic: "速率單位換算",
    text: "2 公里/分 = ? 公里/時",
    options: { A: "60", B: "100", C: "120", D: "360" },
    answer: "C",
    explanation: "2×60＝120（公里/時）"
  },
  {
    id: 57,
    topic: "速率單位換算",
    text: "3 公里/分 = ? 公尺/秒",
    options: { A: "30", B: "50", C: "60", D: "180" },
    answer: "B",
    explanation: "3×1000÷60＝50（公尺/秒）"
  },
  {
    id: 58,
    topic: "速率單位換算",
    text: "1.5 公里/分 = ? 公里/時",
    options: { A: "45", B: "60", C: "90", D: "150" },
    answer: "C",
    explanation: "1.5×60＝90（公里/時）"
  },
  {
    id: 59,
    topic: "速率單位換算",
    text: "0.6 公里/分 = ? 公尺/秒",
    options: { A: "6", B: "10", C: "36", D: "60" },
    answer: "B",
    explanation: "0.6×1000÷60＝10（公尺/秒）"
  },
  {
    id: 60,
    topic: "速率單位換算",
    text: "1.2 公里/分 = ? 公尺/秒",
    options: { A: "12", B: "20", C: "60", D: "72" },
    answer: "B",
    explanation: "1.2×1000÷60＝20（公尺/秒）"
  },
  {
    id: 61,
    topic: "速率單位換算",
    text: "0.9 公里/分 = ? 公尺/秒",
    options: { A: "9", B: "15", C: "45", D: "54" },
    answer: "B",
    explanation: "0.9×1000÷60＝15（公尺/秒）"
  },
  {
    id: 62,
    topic: "速率單位換算",
    text: "2.4 公里/分 = ? 公尺/秒",
    options: { A: "24", B: "40", C: "60", D: "144" },
    answer: "B",
    explanation: "2.4×1000÷60＝40（公尺/秒）"
  },
  {
    id: 63,
    topic: "速率單位換算",
    text: "0.5 公里/分 = ? 公尺/分",
    options: { A: "50", B: "500", C: "5000", D: "30" },
    answer: "B",
    explanation: "0.5×1000＝500（公尺/分）"
  },
  {
    id: 64,
    topic: "速率單位換算",
    text: "1.8 公里/分 = ? 公里/時",
    options: { A: "60", B: "90", C: "108", D: "180" },
    answer: "C",
    explanation: "1.8×60＝108（公里/時）"
  },
  {
    id: 65,
    topic: "速率單位換算",
    text: "3.6 公里/分 = ? 公尺/秒",
    options: { A: "36", B: "60", C: "100", D: "216" },
    answer: "B",
    explanation: "3.6×1000÷60＝60（公尺/秒）"
  },
  {
    id: 66,
    topic: "追及與相遇",
    text: "甲車在乙車前 72 公里處，同向行駛，甲時速 48 公里、乙時速 60 公里，幾小時後乙車追上甲車？",
    options: { A: "4 小時", B: "5 小時", C: "6 小時", D: "8 小時" },
    answer: "C",
    explanation: "追及距離÷速度差＝時間：72÷(60－48)＝6（小時）"
  },
  {
    id: 67,
    topic: "追及與相遇",
    text: "弟在哥前方 100 公尺，同向跑，弟每秒 4m、哥每秒 6m，幾秒後哥追上弟？",
    options: { A: "25 秒", B: "50 秒", C: "60 秒", D: "100 秒" },
    answer: "B",
    explanation: "100÷(6－4)＝50（秒）"
  },
  {
    id: 68,
    topic: "追及與相遇",
    text: "甲時速 12km、乙時速 8km，乙先走 2 小時，幾小時後甲追上乙？",
    options: { A: "2", B: "3", C: "4", D: "5" },
    answer: "C",
    explanation: "乙領先 8×2＝16（公里），16÷(12－8)＝4（小時）"
  },
  {
    id: 69,
    topic: "追及與相遇",
    text: "甲、乙同時同向出發，甲每分 80m、乙每分 60m，走了 15 分後兩人相距多少公尺？",
    options: { A: "100", B: "200", C: "300", D: "400" },
    answer: "C",
    explanation: "(80－60)×15＝300（公尺）"
  },
  {
    id: 70,
    topic: "追及與相遇",
    text: "甲車時速 72km、乙車時速 54km，同時同向，2 小時後兩車相距多少公里？",
    options: { A: "18", B: "24", C: "36", D: "60" },
    answer: "C",
    explanation: "(72－54)×2＝36（公里）"
  },
  {
    id: 71,
    topic: "追及與相遇",
    text: "姊在妹前方 200 公尺，姊時速 3km、妹時速 5km，同向行進，妹追上姊需多少分？",
    options: { A: "4 分", B: "6 分", C: "8 分", D: "10 分" },
    answer: "B",
    explanation: "速度差 5－3＝2（公里/時）＝約 33.3（公尺/分），200÷33.3≈6（分）"
  },
  {
    id: 72,
    topic: "追及與相遇",
    text: "甲每秒 8m、乙每秒 6m，乙先出發 5 秒，甲從同起點追，幾秒後追上乙？",
    options: { A: "10 秒", B: "15 秒", C: "20 秒", D: "30 秒" },
    answer: "B",
    explanation: "乙領先 6×5＝30（公尺），30÷(8－6)＝15（秒）"
  },
  {
    id: 73,
    topic: "追及與相遇",
    text: "A 車時速 60、B 車時速 40，同向行駛，A 在 B 後方 30 公里，A 幾小時追上 B？",
    options: { A: "1", B: "1.5", C: "2", D: "3" },
    answer: "B",
    explanation: "30÷(60－40)＝1.5（小時）"
  },
  {
    id: 74,
    topic: "追及與相遇",
    text: "甲每分走 150m、乙每分走 100m，同時同地同向出發，10 分後甲比乙多走多少公尺？",
    options: { A: "300", B: "500", C: "800", D: "1000" },
    answer: "B",
    explanation: "(150－100)×10＝500（公尺）"
  },
  {
    id: 75,
    topic: "追及與相遇",
    text: "兩人相距 500 公尺，甲每秒 5m、乙每秒 3m，甲追乙需幾秒？",
    options: { A: "100", B: "200", C: "250", D: "500" },
    answer: "C",
    explanation: "500÷(5－3)＝250（秒）"
  },
  {
    id: 76,
    topic: "追及與相遇",
    text: "前車時速 60km、後車時速 90km，前車先開 1 小時，後車追上需多久？",
    options: { A: "1 小時", B: "1.5 小時", C: "2 小時", D: "3 小時" },
    answer: "C",
    explanation: "前車領先 60×1＝60（公里），60÷(90－60)＝2（小時）"
  },
  {
    id: 77,
    topic: "追及與相遇",
    text: "甲速為乙速 2 倍，甲時速 40km，乙先走 30km，甲多少小時後追上乙？",
    options: { A: "1", B: "1.5", C: "2", D: "3" },
    answer: "B",
    explanation: "乙時速＝40÷2＝20，30÷(40－20)＝1.5（小時）"
  },
  {
    id: 78,
    topic: "追及與相遇",
    text: "甲每分 90m、乙每分 60m，同時同地同向出發，何時甲領先乙 300 公尺？",
    options: { A: "5 分", B: "10 分", C: "15 分", D: "20 分" },
    answer: "B",
    explanation: "300÷(90－60)＝10（分）"
  },
  {
    id: 79,
    topic: "追及與相遇",
    text: "弟每秒跑 3m，哥比弟晚出發 6 秒，哥每秒 5m，哥從同地點追，幾秒後追上弟？",
    options: { A: "6 秒", B: "9 秒", C: "12 秒", D: "18 秒" },
    answer: "B",
    explanation: "弟領先 3×6＝18（公尺），18÷(5－3)＝9（秒）"
  },
  {
    id: 80,
    topic: "追及與相遇",
    text: "火車在客車前方 24km，客車時速 90km、火車時速 60km，多少小時後客車追上火車？",
    options: { A: "0.4", B: "0.6", C: "0.8", D: "1" },
    answer: "C",
    explanation: "24÷(90－60)＝0.8（小時）"
  },
  {
    id: 81,
    topic: "追及與相遇",
    text: "甲、乙同時同地同向出發，甲時速 30km、乙時速 20km，3 小時後兩人相距多少公里？",
    options: { A: "10", B: "20", C: "30", D: "50" },
    answer: "C",
    explanation: "(30－20)×3＝30（公里）"
  },
  {
    id: 82,
    topic: "追及與相遇",
    text: "姊速為妹 2 倍，姊每分 80m，妹先走 200m，姊追上需多少分？",
    options: { A: "4 分", B: "5 分", C: "6 分", D: "8 分" },
    answer: "B",
    explanation: "妹每分＝80÷2＝40，200÷(80－40)＝5（分）"
  },
  {
    id: 83,
    topic: "追及與相遇",
    text: "甲時速 100km、乙時速 80km，同地同向同時出發，何時甲領先乙 60km？",
    options: { A: "2 小時", B: "3 小時", C: "4 小時", D: "5 小時" },
    answer: "B",
    explanation: "60÷(100－80)＝3（小時）"
  },
  {
    id: 84,
    topic: "追及與相遇",
    text: "弟先出發 4 分，每分 60m，哥每分 100m，哥追上弟需幾分？",
    options: { A: "4 分", B: "6 分", C: "8 分", D: "10 分" },
    answer: "B",
    explanation: "弟領先 60×4＝240（公尺），240÷(100－60)＝6（分）"
  },
  {
    id: 85,
    topic: "追及與相遇",
    text: "甲跑 5m/秒、乙跑 4m/秒，乙先跑 30m，甲追上乙需多少秒？",
    options: { A: "15", B: "20", C: "25", D: "30" },
    answer: "D",
    explanation: "30÷(5－4)＝30（秒）"
  },
  {
    id: 86,
    topic: "追及與相遇",
    text: "甲、乙相距 240m，同時相向而行，甲每秒 5m、乙每秒 3m，幾秒後相遇？",
    options: { A: "20", B: "30", C: "40", D: "60" },
    answer: "B",
    explanation: "相向相遇，速度相加：240÷(5＋3)＝30（秒）"
  },
  {
    id: 87,
    topic: "追及與相遇",
    text: "兩車相距 300km，同時相向出發，甲時速 60km、乙時速 40km，幾小時後相遇？",
    options: { A: "2", B: "3", C: "4", D: "5" },
    answer: "B",
    explanation: "300÷(60＋40)＝3（小時）"
  },
  {
    id: 88,
    topic: "追及與相遇",
    text: "兩人相距 480m，同時相向走，甲每分 60m、乙每分 40m，幾分後相遇？",
    options: { A: "3", B: "4", C: "4.8", D: "6" },
    answer: "C",
    explanation: "480÷(60＋40)＝4.8（分）"
  },
  {
    id: 89,
    topic: "追及與相遇",
    text: "甲車時速 80km，開 3 小時走多少公里？",
    options: { A: "160", B: "200", C: "240", D: "300" },
    answer: "C",
    explanation: "80×3＝240（公里）"
  },
  {
    id: 90,
    topic: "追及與相遇",
    text: "汽車以時速 60km 行駛 2.5 小時，共走多少公里？",
    options: { A: "100", B: "120", C: "150", D: "180" },
    answer: "C",
    explanation: "60×2.5＝150（公里）"
  },
  {
    id: 91,
    topic: "追及與相遇",
    text: "走 180km 需 3 小時，時速多少 km？",
    options: { A: "45", B: "60", C: "75", D: "90" },
    answer: "B",
    explanation: "180÷3＝60（公里/時）"
  },
  {
    id: 92,
    topic: "追及與相遇",
    text: "走 120km 花 2.5 小時，時速多少 km？",
    options: { A: "40", B: "48", C: "50", D: "60" },
    answer: "B",
    explanation: "120÷2.5＝48（公里/時）"
  },
  {
    id: 93,
    topic: "追及與相遇",
    text: "時速 72km 行走 4 小時，走多少公里？",
    options: { A: "240", B: "288", C: "300", D: "320" },
    answer: "B",
    explanation: "72×4＝288（公里）"
  },
  {
    id: 94,
    topic: "追及與相遇",
    text: "兩地距 500m，兩人同時相向，甲每秒 8m、乙每秒 12m，多久相遇？",
    options: { A: "20 秒", B: "25 秒", C: "30 秒", D: "50 秒" },
    answer: "B",
    explanation: "500÷(8＋12)＝25（秒）"
  },
  {
    id: 95,
    topic: "追及與相遇",
    text: "兩人相距 6km，相向而行，甲時速 4km、乙時速 6km，何時相遇？",
    options: { A: "30 分", B: "36 分", C: "45 分", D: "60 分" },
    answer: "B",
    explanation: "6÷(4＋6)＝0.6（小時）＝36（分）"
  },
  {
    id: 96,
    topic: "追及與相遇",
    text: "甲車時速 90km，跑了 40 分鐘，走多少公里？",
    options: { A: "45", B: "50", C: "60", D: "75" },
    answer: "C",
    explanation: "90×(40/60)＝60（公里）"
  },
  {
    id: 97,
    topic: "追及與相遇",
    text: "走 45km 花 30 分鐘，時速多少 km？",
    options: { A: "60", B: "75", C: "90", D: "150" },
    answer: "C",
    explanation: "45÷0.5＝90（公里/時）"
  },
  {
    id: 98,
    topic: "追及與相遇",
    text: "走 100m 花 20 秒，秒速多少 m/秒？",
    options: { A: "3", B: "4", C: "5", D: "10" },
    answer: "C",
    explanation: "100÷20＝5（公尺/秒）"
  },
  {
    id: 99,
    topic: "追及與相遇",
    text: "甲步行 4km/時、乙 6km/時，兩人相距 20km 同時相向，多久相遇？",
    options: { A: "1 小時", B: "1.5 小時", C: "2 小時", D: "4 小時" },
    answer: "C",
    explanation: "20÷(4＋6)＝2（小時）"
  },
  {
    id: 100,
    topic: "追及與相遇",
    text: "走 300m 花 1 分鐘，換算成時速多少 km？",
    options: { A: "15", B: "18", C: "20", D: "30" },
    answer: "B",
    explanation: "300m/分×60＝18000（公尺/時）＝18（公里/時）"
  },
];
