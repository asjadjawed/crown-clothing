import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf4h9wK5d2zGMtmUpY2muYziLxaADKOng",
  authDomain: "crown-clothing-db-f7152.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-f7152.firebaseio.com",
  projectId: "crown-clothing-db-f7152",
  storageBucket: "crown-clothing-db-f7152.appspot.com",
  messagingSenderId: "695331708086",
  appId: "1:695331708086:web:0193fcb41b37cd4d825a17",
  measurementId: "G-057X6J2PV7",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const user = await userRef.get();
  if (!user.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }
  return userRef;
};

export default firebase;
