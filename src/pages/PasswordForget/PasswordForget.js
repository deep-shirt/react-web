import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const PasswordForgetPage = () =>
  <div>
		<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create"]]}/>
    <div className="container">
			<div className="row align-items-center">
				<div className="col-s-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 align-self-center">
					<div className="jumbotron wow slideInRight" id="register-form-container">
						<h2>Forgot your password?</h2>
						<PasswordForgetForm />
					</div>
				</div>
			</div>
		</div>
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
      	<div className="form-group">
  				<label htmlFor="reset-input-email">Email</label>
	        <input
	        	id="reset-input-email"
	        	className="form-control form-control-lg"
	          value={this.state.email}
	          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
	          type="email"
	          placeholder="darth@maul.sith"
	        />
        </div>
        <button className="btn btn-lg btn-block btn-primary" disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
