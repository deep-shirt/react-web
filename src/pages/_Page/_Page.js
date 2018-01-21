import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './_Page.css'

class _Page extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create"]]}/>
			</div>
		);
	}
}

export default _Page;
