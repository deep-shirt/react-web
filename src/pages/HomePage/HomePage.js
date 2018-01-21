import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.css';
import firebase from '../../firebase';


const GaleryItem = (props) => {
	return (
		<div className="col-12 col-md-4">
			<div className="card wow fadeIn">
				<img src={props.url} alt="" className="card-img-top"/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">$ {props.price}</h6>
					<p className="card-text">{props.description}</p>
					<Link to={props.path} className="card-link">Go to listing</Link>
					<a href="/cart" className="card-link">Add to cart</a>
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
		};
		this.getDesigns();
	}

	getDesigns() {

		var component = this;

		firebase.db.ref("products").limitToLast(3).once("value").then(function(designsRaw) {

			const itemList = [];

			var designs = designsRaw.val();
			for(let i in designs) {

				itemList.push(<GaleryItem key={i} path={"/designs/" + i} title={designs[i].title} url={designs[i].designUrl} description="lol" price={designs[i].price} img1={designs[i].previewExtras[0]} img2={designs[i].previewExtras[1]} img3={designs[i].previewExtras[2]} />);
			}

			component.setState({imgSet: itemList});
		});
	}

	render() {
		return (
			<div className="row">{this.state.imgSet}</div>
		);
	}
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

							<div className="embed-responsive embed-responsive-16by9">
							  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cHcVU5cGUNE?rel=0"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
