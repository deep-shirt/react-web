import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCCvRrXL0MfEHj86_NvadKqaipSHeQ9WN8",
  authDomain: "deep-shirt.firebaseapp.com",
  databaseURL: "https://deep-shirt.firebaseio.com",
  projectId: "deep-shirt",
  storageBucket: "deep-shirt.appspot.com",
  messagingSenderId: "81835696322"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
