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
				<div className="col-6 align-self-center">
                    <div id="preview-carousel" className="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#preview-carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#preview-carousel" data-slide-to="1"></li>
                            <li data-target="#preview-carousel" data-slide-to="2"></li>
                            <li data-target="#preview-carousel" data-slide-to="3"></li>
                            <li data-target="#preview-carousel" data-slide-to="4"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block image" src={this.state.design.designUrl} alt="Close-up style" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block image" src={this.state.design.previewExtras['0']} alt="Human wearing your style, 1" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block image" src={this.state.design.previewExtras[1]} alt="Human wearing your style, 2" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block image" src={this.state.design.previewExtras[2]} alt="Human wearing your style, 3" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block image" src={this.state.design.previewExtras[3]} alt="Fith slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
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
