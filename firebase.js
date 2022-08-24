import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyDgQ0a1KRprfUc7p2eBJsRX6IkCVQVmx3w",
  authDomain: "vocal-clone-firebase.firebaseapp.com",
  projectId: "vocal-clone-firebase",
  storageBucket: "vocal-clone-firebase.appspot.com",
  messagingSenderId: "921469485926",
  appId: "1:921469485926:web:c45f1f4763b9b10cc4bea7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);
