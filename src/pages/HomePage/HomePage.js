import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './HomePage.css'

class HomePage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", true, "/"], ["Explore", false, "/explore"], ["Create", false, "/create"]]}/>
				<Footer />
			</div>
		);
	}
}

export default HomePage;
