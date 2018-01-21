import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ExplorePage.css'

const cards = [];

for (let i = 1; i < 50; i++) {
	cards.push({
		id: "t_design_" + i,
		title: "Design " + i,
		price: (Math.random() * 50).toFixed(2),
		description: "This is the description text for design " + i + ".",
		url: "/designs/shirt" + i,
		imgs: [
			"/img/shirt" + i + "/img1",
			"/img/shirt" + i + "/img2",
			"/img/shirt" + i + "/img3"
		]
	});
}

const GaleryItem = (props) => {
	return (
		<div className="col-12 col-md-6 col-lg-4 col-xl-3">
			<div className="card wow fadeIn" data-wow-delay="0.2s">
				<img src="https://dummyimage.com/800x800/000/fff.png" alt="" className="card-img-top"/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">$ {props.price}</h6>
					<p className="card-text">{props.description}</p>
					<Link to={props.url} className="card-link">Go to listing</Link>
					<a href="/cart" className="card-link">Add to cart</a>
				</div>
			</div>
		</div>
	);
}

const Galery = () => {
	const itemList = [];

	for (let card of cards) {
		itemList.push(<GaleryItem key={card.id} title={card.title} url={card.url} price={card.price} img1={card.imgs[0]} img2={card.imgs[1]} img3={card.imgs[2]} />);
	}

	return (
		<div className="row">{itemList}</div>
	);
}

class ExplorePage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", true, "/explore"], ["Create", false, "/create/pickcontent"]]}/>
				<div className="container-fluid">
					<Galery />
				</div>
				<Footer />
			</div>
		);
	}
}

export default ExplorePage;
