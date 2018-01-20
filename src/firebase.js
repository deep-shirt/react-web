import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAc6p07lJWvRF35vVmNJcYQjhCz5NPTlV0",
    authDomain: "deepshirtwebapp.firebaseapp.com",
    databaseURL: "https://deepshirtwebapp.firebaseio.com",
    projectId: "deepshirtwebapp",
    storageBucket: "deepshirtwebapp.appspot.com",
    messagingSenderId: "371105960911"
  };
  firebase.initializeApp(config);
  // var config = {
  //   apiKey: "AIzaSyBlmr9vZHFavV0HWn41bQacIoo4F_Nu3Y8",
  //   authDomain: "deep-shirt-web.firebaseapp.com",
  //   databaseURL: "https://deep-shirt-web.firebaseio.com",
  //   projectId: "deep-shirt-web",
  //   storageBucket: "deep-shirt-web.appspot.com",
  //   messagingSenderId: "521333551765"
  // };
  // firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;