import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXTAaEFtLIR-KDqsH3JVMN7h0q0PSBA_o",
  authDomain: "wefootwear-68c74.firebaseapp.com",
  projectId: "wefootwear-68c74",
  storageBucket: "wefootwear-68c74.appspot.com",
  messagingSenderId: "543016836920",
  appId: "1:543016836920:web:d238ef9927ce96bcabebcd",
  measurementId: "G-5Z7SRXD89Z",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
