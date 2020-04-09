import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLmm5NUw4AZSZh87TBj-LDmJhlA6ZxxYw",
  authDomain: "crown-clothing-db-13a77.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-13a77.firebaseio.com",
  projectId: "crown-clothing-db-13a77",
  storageBucket: "crown-clothing-db-13a77.appspot.com",
  messagingSenderId: "613158920216",
  appId: "1:613158920216:web:75900c74a60425e9ede36d",
  measurementId: "G-2LFWYJ8DE6",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
