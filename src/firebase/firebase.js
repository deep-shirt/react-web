import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCCvRrXL0MfEHj86_NvadKqaipSHeQ9WN8",
    authDomain: "deep-shirt.firebaseapp.com",
    databaseURL: "https://deep-shirt.firebaseio.com",
    projectId: "deep-shirt",
    storageBucket: "deep-shirt.appspot.com",
    messagingSenderId: "81835696322"
  };


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
