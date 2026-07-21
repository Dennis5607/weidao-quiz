/* 衛道圓夢營 - 速率練習雲端排行榜同步（Firebase Firestore） */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGFBA4bqb_CZOHI66vTr13_jZEwqf9MdE",
  authDomain: "weidao-quiz.firebaseapp.com",
  projectId: "weidao-quiz",
  storageBucket: "weidao-quiz.firebasestorage.app",
  messagingSenderId: "329316559074",
  appId: "1:329316559074:web:82dd4f2f4821c2f5c856bb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const attemptsCol = collection(db, "attempts");

window.CloudDB = {
  async saveAttempt(record) {
    try {
      await addDoc(attemptsCol, record);
      return true;
    } catch (e) {
      console.warn("CloudDB saveAttempt failed", e);
      return false;
    }
  },
  async fetchAllAttempts() {
    try {
      const q = query(attemptsCol, orderBy("date", "asc"), limit(5000));
      const snap = await getDocs(q);
      return snap.docs.map((d) => d.data());
    } catch (e) {
      console.warn("CloudDB fetchAllAttempts failed", e);
      return null;
    }
  }
};

window.dispatchEvent(new Event("clouddb-ready"));
