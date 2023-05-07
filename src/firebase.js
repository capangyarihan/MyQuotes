
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQXCK3u2hHQwKPxZxJgPpc83PkgQckUTk",
  authDomain: "fb-crud-c4898.firebaseapp.com",
  projectId: "fb-crud-c4898",
  storageBucket: "fb-crud-c4898.appspot.com",
  messagingSenderId: "1031625939531",
  appId: "1.1031625939531:web:ed10b07766c95e35948bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getDatabase(app);