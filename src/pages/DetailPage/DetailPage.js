import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './DetailPage.css'

const DetailPage = ({match}) => {
	const design = {
		id: "t_design_" + match.params.id,
		title: "Design " + match.params.id,
		price: (Math.random() * 50).toFixed(2),
		description: "This is the description text for design " + match.params.id + ".",
		imgs: [
			"/img/" + match.params.id + "/img1",
			"/img/" + match.params.id + "/img2",
			"/img/" + match.params.id + "/img3"
		]
	}

	return (
		<div>
			<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create"]]}/>
			<div className="container" id="detail-container">
				<div className="row">
					<div className="col-6">
						<img src="https://dummyimage.com/800x800/000/fff.png" alt="" className="col"/>
					</div>
					<div className="col-6">
						<h1 className="col-12">{design.title}</h1>
						<h5 className="col-12">{design.description}</h5>
						<div className="form-group col-6 align-self-start">
							<label htmlFor="size-selection"></label>
							<select className="form-control" id="size-selection">
					      <option>XS</option>
					      <option>S</option>
					      <option>M</option>
					      <option>L</option>
					      <option>XL</option>
					      <option>XXL</option>
					    </select>
						</div>
						<h4 className="col-6 text-center align-self-start">${design.price}</h4>
						<button className="btn btn-primary col-12 btn-block">Buy</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default DetailPage;
