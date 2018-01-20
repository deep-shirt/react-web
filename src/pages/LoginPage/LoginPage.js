import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './LoginPage.css'

function LoginForm() {
	return (
		<form>
			<h2>Welcome back to paradise</h2>
			<div className="form-group">
				<label htmlFor="register-input-email">Email</label>
				<input type="email" className="form-control form-control-lg" id="register-input-email" placeholder="john@lennon.org" />
			</div>
			<div className="form-group">
				<label htmlFor="register-input-pwd">Password</label>
				<input type="password" className="form-control form-control-lg" id="register-input-pwd" placeholder="********" />
			</div>
			<button className="btn btn-lg btn-block btn-success">Login</button>
			<p>You don't have an account? <Link to="/register">Sign Up Now</Link></p>
		</form>
	);
}

class LoginPage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create/pickcontent"]]}/>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-s-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 align-self-center">
							<div className="jumbotron wow slideInLeft" id="register-form-container">
								<LoginForm />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default LoginPage;
