import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtFyKO4ARWf3GBCjIh82Vmgrgkqz5H16I",
  authDomain: "arrabalmusicstore.firebaseapp.com",
  projectId: "arrabalmusicstore",
  storageBucket: "arrabalmusicstore.appspot.com",
  messagingSenderId: "875940012906",
  appId: "1:875940012906:web:5e6edc786cb97c2e9a7b13"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);