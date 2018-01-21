import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
  	id="signout-button"
  	className="btn btn-outline-success my-2 my-sm-0"
    type="button"
    onClick={auth.doSignOut()} >
    Sign Out
  </button>

export default SignOutButton;
