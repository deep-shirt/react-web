import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ExplorePage.css'

class ExplorePage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", true, "/explore"], ["Create", false, "/create"]]}/>
				<Footer />
			</div>
		);
	}
}

export default ExplorePage;
