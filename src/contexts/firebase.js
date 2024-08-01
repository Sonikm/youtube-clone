import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB9bzhBAM3AB6Gcto-lv0ZTE5Jyp4I7jZA",
  authDomain: "clone-9e224.firebaseapp.com",
  projectId: "clone-9e224",
  storageBucket: "clone-9e224.appspot.com",
  messagingSenderId: "321892232081",
  appId: "1:321892232081:web:bc270b611b675a2a040830",
  measurementId: "G-TJTQ4ZCWP5",
  databaseURL: "https://clone-9e224-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isAlreadySignUp, setIsAlreadySignUp] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  const signOutUser = () => signOut(firebaseAuth);

  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((e) => console.log("Login successfully...", e.user))
      .catch((e) => {
        setIsAlreadySignUp(true);
        console.log("Already used this email id....");
      });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider).then((e) => {
      console.log("SignIn successfully..");
      console.log(e.user);
    });
  };

  const signInUserWithEmailAndPassword = (email, password) => {};

  const putData = (path, data) => {
    set(ref(database, path), data);
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        putData,
        signUpWithGoogle,
        signOutUser,
        isAlreadySignUp,
        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
