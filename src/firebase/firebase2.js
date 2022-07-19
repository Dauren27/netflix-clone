import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDbgAp0H9D3y0k3AovFXejEGVhAA6IPwOA",
  authDomain: "netflix-2-51f11.firebaseapp.com",
  projectId: "netflix-2-51f11",
  storageBucket: "netflix-2-51f11.appspot.com",
  messagingSenderId: "62499489611",
  appId: "1:62499489611:web:f2ec7ec5a02b864edd8ace",
};

const firestore = firebase.initializeApp(config);

export { firestore };