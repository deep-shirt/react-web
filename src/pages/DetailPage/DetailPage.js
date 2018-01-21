import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import firebase from '../../firebase';
import './DetailPage.css'

class Detail extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			design: {},
		};
		this.getDesign();
	}

	getDesign() {

		var component = this;

		firebase.db.ref("products/" + this.props.detailID).once("value").then(function(item) {
			component.setState({design: item.val()});
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-6">
					<img src={this.state.design.designUrl} alt={"Image for " + this.state.design.name} className="col"/>
				</div>
				<div className="col-6">

					<h1 className="col-12 space-b-sm">{this.state.design.name}</h1>
					<h4 className="col-12 space-b-lg">{this.state.design.description}</h4>

					<div className="form-group row col-12">
						<label htmlFor="size-selection" className="col-sm-8 col-form-label">Select your size:</label>
						<select className="form-control col-sm-4" id="size-selection">
							<option>XS</option>
							<option>S</option>
							<option>M</option>
							<option>L</option>
							<option>XL</option>
							<option>XXL</option>
						</select>
					</div>

					<div className="form-group row col-12 space-b-lg">
						<label htmlFor="quantity-selection" className="col-sm-8 col-form-label">Tell us how many:</label>
						<select className="form-control col-sm-4" id="quantity-selection">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>5</option>
							<option>10</option>
						</select>
					</div>

					<h3 className="text-center">$ {this.state.design.price}</h3>
					<button className="col-md-4 offset-md-4 btn btn-primary btn-block">Buy</button>
				</div>
			</div>
		);
	}
}

const DetailPage = ({match}) => {

	return (
		<div>
			<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create"]]}/>
			<div className="container" id="detail-container">
				<Detail detailID={match.params.id} />
			</div>
		</div>
	);
}

export default DetailPage;
