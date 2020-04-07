import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCndXp4ZnmtMQPr_4eAq0Kh_hHwgSrz6o0",
  authDomain: "crown-clothing-db-f2cd4.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-f2cd4.firebaseio.com",
  projectId: "crown-clothing-db-f2cd4",
  storageBucket: "crown-clothing-db-f2cd4.appspot.com",
  messagingSenderId: "164235381074",
  appId: "1:164235381074:web:cdf4c357fc13bf4a5bd28b",
  measurementId: "G-B77KNJMHB5",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
