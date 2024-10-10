export const firebaseConfig = {
  apiKey: "AIzaSyCfimxrKVgTvG7WWpEVtuqDmnwW3aAqu7I",
  authDomain: "qr-code-decode-d97e5.firebaseapp.com",
  projectId: "qr-code-decode-d97e5",
  storageBucket: "qr-code-decode-d97e5.appspot.com",
  messagingSenderId: "354651911364",
  appId: "1:354651911364:web:04271e71a09a1ef3d44591"
};


import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth,onAuthStateChanged, sendPasswordResetEmail ,sendEmailVerification,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
import { getFirestore,getDocsFromServer,getAggregateFromServer,sum,getCountFromServer, collection, query, where, getDocs,getDoc, setDoc, addDoc, updateDoc, doc,deleteDoc,onSnapshot,orderBy, limit,startAt, startAfter,endAt } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';




let docName = "qr-code-decode";

export {docName,getDocsFromServer, getAggregateFromServer,sum,onAuthStateChanged,sendEmailVerification, sendPasswordResetEmail , getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,initializeApp,getFirestore,getCountFromServer, collection, query, where, getDocs,getDoc, updateDoc, setDoc, addDoc, doc,deleteDoc,onSnapshot,orderBy, limit,startAt, startAfter,endAt};


// firebase omarvenom22@gmail.com
// infintyfree in domins omarvenom101@gmail.com

