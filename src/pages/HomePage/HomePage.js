import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './HomePage.css'

const cards = [];

for (let i = 1; i < 4; i++) {
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
		<div className="col-12 col-md-4">
			<div className="card wow fadeIn" data-wow-delay={props.index % 3 / 5 + 0.2 + "s"}>
				<img src="https://dummyimage.com/800x800/000/fff.png" alt="" className="card-img-top"/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">$ {props.price}</h6>
					<p className="card-text">{props.description}</p>
					<Link to={props.url} className="card-link">Go to listing</Link>
					<a href="#" className="card-link">Add to cart</a>
				</div>
			</div>
		</div>
	);
}

const Galery = () => {
	const itemList = [];

	for (let i = 0; i < cards.length; i++) {
		let card = cards[i];
		itemList.push(<GaleryItem index={i} key={card.id} title={card.title} url={card.url} price={card.price} img1={card.imgs[0]} img2={card.imgs[1]} img3={card.imgs[2]} />);
	}

	return (
		<div className="row">{itemList}</div>
	);
}

class HomePage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", true, "/"], ["Explore", false, "/explore"], ["Create", false, "/create/pickcontent"]]}/>

				<div className="container-fluid">
					<div className="row">
						<div className="jumbotron col-12 col-lg-10 offset-lg-1 wow fadeInRight" id="time-container">
							<h1>AAd : BBh : CCm : DDs</h1>
						</div>
					</div>
					<Galery />
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="jumbotron col-12 wow fadeIn" id="demo-container" data-wow-delay="0.4s">
							<h1>HOW DOES</h1>
							<h1>IT WORK ?</h1>

							<div class="embed-responsive embed-responsive-16by9">
							  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cHcVU5cGUNE?rel=0"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
