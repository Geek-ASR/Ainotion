import { initializeApp, getApps, getApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyB0owLiT0bVEd505z1SLSpueVtegSqt_9A",
    authDomain: "ainotion-1890a.firebaseapp.com",
    projectId: "ainotion-1890a",
    storageBucket: "ainotion-1890a.firebasestorage.app",
    messagingSenderId: "496144860558",
    appId: "1:496144860558:web:a38fb68bc1160bb292d0df"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();