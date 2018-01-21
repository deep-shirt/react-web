import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import { SignUpLink } from '../RegisterPage/RegisterPage';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import './LoginPage.css';

const SignInPage = ({ history }) => {

	return (
	  <div>
	  	<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create/pickcontent"]]}/>
	    
	    <div className="container">
	    	<div className="row">
	    		<div className="col-s-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
						<div className="jumbotron wow slideInLeft" id="login-form-container">
	   					<SignInForm history={history} />
	   					<SignUpLink />
	    				<PasswordForgetLink />
						</div>
					</div>
	    	</div>
	    </div>

	    
	  </div>
  );
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOMEPAGE);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
      	<h2>Welcome back to paradise</h2>
      	<div className="form-group">
      		<label htmlFor="login-input-email">Email</label>
	        <input
	        	id="login-input-email"
	        	className="form-control form-control-lg"
	          value={email}
	          onChange={event => this.setState(byPropKey('email', event.target.value))}
	          type="text"
	          placeholder="john@lenn.on"
	        />
        </div>
      	<div className="form-group">
      		<label htmlFor="login-input-pwd">Password</label>
	        <input
	        	id="login-input-pwd"
	        	className="form-control form-control-lg"
	          value={password}
	          onChange={event => this.setState(byPropKey('password', event.target.value))}
	          type="password"
	          placeholder="********"
	        />
        </div>
        <button className="btn btn-lg btn-block btn-success" disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
