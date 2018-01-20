import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CreatePage.css'

class CreatePage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", true, "/create"]]}/>
				<Footer />
			</div>
		);
	}
}

export default CreatePage;
