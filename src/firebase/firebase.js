import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
  apiKey: "AIzaSyBHLUrm25kqE9BJ70XKLSRaVloPiUicAsE",
  authDomain: "netflix-clone-c6ee6.firebaseapp.com",
  projectId: "netflix-clone-c6ee6",
  storageBucket: "netflix-clone-c6ee6.appspot.com",
  messagingSenderId: "33587543406",
  appId: "1:33587543406:web:2001ccacd537881a07957f",
  measurementId: "G-FSY3CQNSMY",
};
const firestore = firebase.initializeApp(config);
export { firestore }
export const auth = firebase.auth();

