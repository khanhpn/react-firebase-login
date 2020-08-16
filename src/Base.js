import Rebase from "re-base";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA1K1C5BWAeXaKAkqoEEPA83Fr3CB8j1no",
  authDomain: "reclaim-d7860.firebaseapp.com",
  databaseURL: "https://reclaim-d7860.firebaseio.com",
  projectId: "reclaim-d7860",
  storageBucket: "reclaim-d7860.appspot.com",
  messagingSenderId: "335251742405",
  appId: "1:335251742405:web:2480f0303ceb59ada79aac"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebase.database());

export default base;
