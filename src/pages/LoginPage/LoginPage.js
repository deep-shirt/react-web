import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './LoginPage.css'

class LoginPage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create"]]}/>
				<Footer />
			</div>
		);
	}
}

export default LoginPage;
