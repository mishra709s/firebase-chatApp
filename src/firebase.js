import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyC4qgpOPaIOR5otpodxaIS-WIbdHjk_tKo",
  authDomain: "superchat-1eaf4.firebaseapp.com",
  projectId: "superchat-1eaf4",
  storageBucket: "superchat-1eaf4.appspot.com",
  messagingSenderId: "552964308275",
  appId: "1:552964308275:web:93b97b44faa6caede69246",
};
!firebase.apps.length ? firebase.initializeApp(Config) : firebase.app();

export default Config;
