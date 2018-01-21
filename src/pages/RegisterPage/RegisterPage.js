import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import './RegisterPage.css';

const SignUpPage = ({ history }) => {
	return (
		<div>
			<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create"]]}/>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-s-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 align-self-center">
						<div className="jumbotron wow slideInRight" id="register-form-container">
							<SignUpForm history={history} />
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {

    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOMEPAGE);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
 				<h2>Join awesomeness</h2>
 				<div className="form-group">
  				<label htmlFor="register-input-user">Username</label>
	        <input
	        	id="register-input-user"
	        	className="form-control form-control-lg"
	          value={username}
	          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
	          type="text"
	          placeholder="pquill"
	        />
	      </div>
 				<div className="form-group">
  				<label htmlFor="register-input-email">Email</label>
	        <input
	        	id="register-input-email"
	        	className="form-control form-control-lg"
	          value={email}
	          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
	          type="email"
	          placeholder="star@lord.ego"
	        />
	      </div>
 				<div className="form-group">
  				<label htmlFor="register-input-passOne">Password</label>
	        <input
	        	id="register-input-passOne"
	        	className="form-control form-control-lg"
	          value={passwordOne}
	          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
	          type="password"
	          placeholder="********"
	        />
	      </div>
 				<div className="form-group">
  				<label htmlFor="register-input-passTwo">Confirm Password</label>
	        <input
	        	id="register-input-passTwo"
	        	className="form-control form-control-lg"
	          value={passwordTwo}
	          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
	          type="password"
	          placeholder="********"
	        />
	      </div>
        <button className="btn btn-lg btn-block btn-primary" disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.REGISTERPAGE}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
