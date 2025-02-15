// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9qGBG39JaGkjF3LxDaLRzq4ew9CdmMJI",
    authDomain: "reactwebsite-48330.firebaseapp.com",
    projectId: "reactwebsite-48330",
    storageBucket: "reactwebsite-48330.firebasestorage.app",
    messagingSenderId: "287858286596",
    appId: "1:287858286596:web:07236f32affafccd5d9551",
    measurementId: "G-LK85K735RB"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
