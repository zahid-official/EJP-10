// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeho5AUXX7beZZ-NC1Vim3iA0VR7lxMAw",
  authDomain: "milestone-10-43e64.firebaseapp.com",
  projectId: "milestone-10-43e64",
  storageBucket: "milestone-10-43e64.firebasestorage.app",
  messagingSenderId: "903559196614",
  appId: "1:903559196614:web:9c42b66958b50f4bbb8cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);