import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './ExplorePage.css'
import firebase from '../../firebase';

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
				<img src={props.prev} alt="" className="card-img-top"/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">$ {props.price}</h6>
					<p className="card-text">{props.description}</p>
					<Link to={props.path} className="card-link">Go to listing</Link>
				
				</div>
			</div>
		</div>
	);
}

class Galery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imgSet: [],
		}
		this.getDesigns();
	}

	getDesigns() {
		let comp = this;

		firebase.db.ref('products').once('value').then((snap) => {
			let itemList = [];
			let results = snap.val();

			for (let i in results) {
				if (results[i].name && results[i].previewImage && results[i].previewExtras) {
					itemList.push(
						<GaleryItem
							key={i}
							path={"/designs/" + i}
							name={results[i].name}
							prev={results[i].previewImage}
							description={results[i].description}
							price={results[i].price}  />
					);
				}
			}

			comp.setState({
				imgSet: itemList
			});
		});
	}

	render() {
		return (
			<div className="row">{this.state.imgSet}</div>
		);
	}
}

class ExplorePage extends React.Component {

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", true, "/explore"], ["Create", false, "/create/pickcontent"]]}/>
				<div className="container-fluid">
					<Galery />
				</div>
			</div>
		);
	}
}

export default ExplorePage;
