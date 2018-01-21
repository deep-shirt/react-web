import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import firebase from '../../firebase';
import './DetailPage.css'

const Carousel = (props) => {
	return (
		<div id="detail-carousel" className="carousel slide" data-ride="carousel">
		  <ol className="carousel-indicators">
		      <li data-target="#detail-carousel" data-slide-to="0" className="active"></li>
		      <li data-target="#detail-carousel" data-slide-to="1"></li>
		      <li data-target="#detail-carousel" data-slide-to="2"></li>
		      <li data-target="#detail-carousel" data-slide-to="3"></li>
		      <li data-target="#detail-carousel" data-slide-to="4"></li>
		  </ol>
		  <div className="carousel-inner">
		    {props.imgs}
		  </div>
		  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		      <span className="sr-only">Previous</span>
		  </a>
		  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		      <span className="carousel-control-next-icon" aria-hidden="true"></span>
		      <span className="sr-only">Next</span>
		  </a>
		</div>
	);
}

class Detail extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			design: {},
			imgs: [],
            value: 0
		};

        this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		var component = this;

		firebase.db.ref("products/" + this.props.detailID).once("value").then(function(item) {
			let design = item.val();
			let urls = [],
					imgs = [];

			urls.push(design.previewImage);
			for (let i of design.previewExtras) {
				urls.push(i);
			}

			for (let i = 0; i < urls.length; i++) {
				if (i === 0) {
					imgs.push(
						<div key={i} className="carousel-item active">
		          <img className="d-block image" src={urls[i]} alt="Close-up style" />
			      </div>
					);
				} else {
					imgs.push(
						<div key={i} className="carousel-item">
		          <img className="d-block image" src={urls[i]} alt="Close-up style" />
			      </div>
					);
				}
			}

			component.setState({
				design: design,
				imgs: imgs,
			});
		});
	}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

	render() {
		return (
			<div className="row">
				<div className="col-12 col-lg-6 align-self-center">
        	<Carousel imgs={this.state.imgs} />    
        </div>
				<div className="col-12 col-lg-6">

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
						<select className="form-control col-sm-4" id="quantity-selection" value={this.state.value} onChange={this.handleChange}>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='5'>5</option>
							<option value='10'>10</option>
						</select>
					</div>

					<h3 className="text-center">$ {this.state.value === 0 ? this.state.design.price : (this.state.design.price * this.state.value).toFixed(2) }</h3>
					<button className="col-md-4 offset-md-4 btn btn-primary btn-block disabled">Store coming soon!</button>
				</div>
			</div>
		);
	}
}

const DetailPage = ({match}) => {

	return (
		<div>
			<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", false, "/create/pickcontent"]]}/>
			<div className="container" id="detail-container">
				<Detail detailID={match.params.id} />
			</div>
		</div>
	);
}

export default DetailPage;
