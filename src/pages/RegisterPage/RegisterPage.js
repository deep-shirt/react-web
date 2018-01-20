import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './RegisterPage.css'

function RegisterForm() {
	return (
		<form>
			<h2>Join awesomeness</h2>
			<div className="form-group">
				<label htmlFor="register-input-email">Email</label>
				<input type="email" className="form-control form-control-lg" id="register-input-email" placeholder="john@lennon.org" />
			</div>
			<div className="form-group">
				<label htmlFor="register-input-name">Username</label>
				<input type="text" className="form-control form-control-lg" id="register-input-name" placeholder="JLennon" />
			</div>
			<div className="form-group">
				<label htmlFor="register-input-pwd">Password</label>
				<input type="password" className="form-control form-control-lg" id="register-input-pwd" placeholder="********" />
			</div>
			<button className="btn btn-lg btn-block btn-primary">Sign Up</button>
			<p>Already have an account? <Link to="/login">Login</Link></p>
		</form>
	);
}

class RegisterPage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create"]]}/>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-s-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 align-self-center">
							<div className="jumbotron wow slideInRight" id="register-form-container">
								<RegisterForm />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default RegisterPage;
