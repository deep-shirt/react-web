import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CreatePage.css'

class CreatePage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", true, "/create"]]}/>
				<div class="jumbotron">
  					<h1 class="display-4">Hello, world!</h1>
  					<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  					<hr class="my-4"></hr>
  					<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  					<p class="lead">
    					<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  					</p>
				</div>
				<Footer />
			</div>
		);
	}
}

export default CreatePage;
