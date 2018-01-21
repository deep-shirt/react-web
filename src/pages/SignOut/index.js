import React from 'react';

import * as firebase from 'firebase';

const SignOutButton = () =>
  <button
  	id="signout-button"
  	className="btn btn-outline-success my-2 my-sm-0"
    type="button"
    onClick={firebase.auth().signOut()} >
    Sign Out
  </button>

export default SignOutButton;
