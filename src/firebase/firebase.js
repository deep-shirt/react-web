import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyBktwvDlyqhJYp9nx6KvG6bJNL0lMGHjbE",
    authDomain: "testtwoauth.firebaseapp.com",
    databaseURL: "https://testtwoauth.firebaseio.com",
    projectId: "testtwoauth",
    storageBucket: "testtwoauth.appspot.com",
    messagingSenderId: "590270242593"
  };

const devConfig = {
    apiKey: "AIzaSyDFeUrz2xt8rHyns2N-AADJJ6y3RQ49ibk",
    authDomain: "testoneauth.firebaseapp.com",
    databaseURL: "https://testoneauth.firebaseio.com",
    projectId: "testoneauth",
    storageBucket: "testoneauth.appspot.com",
    messagingSenderId: "584019892878"
  };

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
