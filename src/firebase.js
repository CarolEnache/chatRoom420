import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyArpanhCMg569y9hTce5B4OdthQtC4l2VE",
  authDomain: "chatroom420-9d2bc.firebaseapp.com",
  databaseURL: "https://chatroom420-9d2bc.firebaseio.com",
  projectId: "chatroom420-9d2bc",
  storageBucket: "chatroom420-9d2bc.appspot.com",
  messagingSenderId: "176709194349"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
