import React from 'react';
import { Navbar, Link } from '../../../components/Navbar/Navbar';
import './Preview.css'
import $ from 'jquery';
import firebase from '../../../firebase';

const  urls = {
	"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/la_muse.jpg": "la_muse",
	"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/rain_princess.jpg": "rain_princess",
	"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/the_scream.jpg": "scream",
	"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/the_shipwreck_of_the_minotaur.jpg": "wreck",
	"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/udnie.jpg": "udnie",
	"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/wave.jpg": "wave"
};

const Carousel = (props) => {

	if (props.imagesLoaded) {
		return (
			<div class="row">
			<div class="col align-self-center">
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
			      <img class="d-block image" src={props.previewImage} alt="First slide" />
			    </div>
					<div class="carousel-item">
			      <img class="d-block image" src={props.previewExtras[0]} alt="Second slide" />
			    </div>
					<div class="carousel-item">
			      <img class="d-block image" src={props.previewExtras[1]} alt="Third slide" />
			    </div>
					<div class="carousel-item">
			      <img class="d-block image " src={props.previewExtras[2]} alt="Forth slide" />
			    </div>
					<div class="carousel-item">
			      <img class="d-block image" src={props.previewExtras[3]} alt="Fith slide" />
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
		</div>
		);
	} else {
		return (
			<div className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
			      <div className="spinnerBG">
							<img src="/Flickr-1s-184px.gif"></img>
						</div>
			    </div>
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
}

class Modal extends React.Component {

	constructor(props){
		super(props);
		this.setDataToFireBase = this.setDataToFireBase.bind(this);
	}

	setDataToFireBase() {

		let item = {
			previewExtras: this.props.data.previewExtras,
			designUrl: this.props.data.designUrl,
			previewImage: this.props.data.previewImage,
			contentImage: this.props.data.contentImage,
			styleImage: this.props.data.styleImage,
			price: (Math.random() * 20 + 15).toFixed(2),
			name:this.refs.name.value,
			description:this.refs.desc.value,
			tags:""
		}

		console.log("Push", item)

		firebase.db.ref("products").push(item)
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	}

	render(){
		return (
			<div>
				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Save new style</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<p>Please enter the name and description of your Style</p>
								<form>
									<div className="form-group">
										<input type="text" ref="name" className="form-control" id="styleName" required placeholder="Name"></input>
									</div>
									<div className="form-group">
										<input type="textarea" ref="desc" className="form-control" id="styleDescription" required placeholder="Tell us something about your creation..."></input>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<Link to="/" type="button" onClick={this.setDataToFireBase} className="btn btn-primary">Save changes</Link>
								<button type="submit" className="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class PreviewPage extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			contentImage: "",
			styleImage: "",
			previewImage: "",
			previewExtras: [],
			designUrl: "",
			taskid: "",
			imagesLoaded: false,
		}
	}

	loadTeeShirts() {

		let api_key = "j5kqg094-uo22-haf4:hiyp-17ctdyx9m5wh";
		let api_url = "https://api.printful.com/mockup-generator/task?task_key=" + this.state.taskid;
		let comp = this;

		$.ajax({
			type: 'POST',
			url: api_url,
			headers: {
			    "Authorization": "Basic " + btoa(api_key),
			},
			success: function(data) {

				if (data.code === 200) {

					if (data.result.status === "completed") {

						comp.setState({
							previewImage: data.result.mockups[0].mockup_url,
						});

						let e = [];
						for (let i = 0; i < data.result.mockups[0].extra.length; i++) {
							e.push(data.result.mockups[0].extra[i].url);
						}
						e.push(comp.state.designUrl);

						comp.setState({
							previewExtras: e,
							imagesLoaded: true,
						});

					} else {
						window.setTimeout(comp.loadTeeShirts(), 1500);
					}
				}
			},
			error: function(err) {
				console.log(err);
			}
		});

	}

	requestTeeShirts() {
		let api_key = "j5kqg094-uo22-haf4:hiyp-17ctdyx9m5wh";
		let api_url = "https://api.printful.com/mockup-generator/create-task/257";
		let api_body = {
			"variant_ids": [8852],
			"format": "jpg",
			"files": [{
				"placement": "default",
				"image_url": this.state.designUrl
			},{
				"placement": "back",
				"image_url": this.state.designUrl
			},{
				"placement": "sleeve_left",
				"image_url": this.state.designUrl
			},{
				"placement": "sleeve_right",
				"image_url": this.state.designUrl
			}]
		}

		let comp = this;

		$.ajax({
			type: 'POST',
			url: api_url,
			data: JSON.stringify(api_body),
			headers: {
			    "Authorization": "Basic " + btoa(api_key),
			},
			success: function(data) {

				if (data.code === 200) {

					comp.setState({
						taskid: data.result.task_key,
					});

					window.setTimeout(comp.loadTeeShirts(), 150);
				}
			},
			error: function(err) {
				console.log(err);
			}
		});
	}

	componentDidMount() {

		let content = window.localStorage.getItem('contentImage');
		let style = window.localStorage.getItem('styleImage');

		if (content && style) {

			console.log(content, style)

			this.setState({
				contentImage: content,
				styleImage: style,
			});

			// API call to ML
			let api_url = "http://35.197.98.218:8080/fast-style-transfer";
			let s = '', t = 5000;

			for (let k in urls) {
				if (k === style) s = urls[k];
			}

			if (s === ''){
				api_url = "http://35.197.98.218:8080/neural-art";
				s = style;
				t = 60000 * 3;
			}

			let comp = this;

			$.ajax({
				type: 'POST',
				url: api_url,
				data: {
					"content": content,
					"style": style,
					"checkpoint": s,
					"num_iterations": 700,
					"maxsize": 1500,
				},
				timeout: t,
				success: function(data) {
					console.log("got it:", data.result_url);
					comp.setState({
						designUrl: data.result_url,
					});
					comp.requestTeeShirts();
				},
				error: function(error) {
					console.log(error);
				}
			});
		}
	}

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", true, "/create/pickcontent"]]}/>
				<div className="container createPage">

					<h1 className="title">Your personal design is ready!</h1>

					<Carousel imagesLoaded={this.state.imagesLoaded} previewImage={this.state.previewImage} previewExtras={this.state.previewExtras} />

					<div className="btns row">
						<div className="btn btn-group mx-auto" role="group" aria-label="Basic example">
							<Link to="#" type="button" className={"btn " + (this.state.imagesLoaded ? 'btn-success' : 'btn-secondary disabled')} data-toggle="modal" data-target="#exampleModal">Save design</Link>
							<Link to="/create/pickcontent" type="button" className="btn btn-danger btn-block">Create new design</Link>
						</div>
					</div>

					<Modal data={this.state}></Modal>

				</div>
			</div>
		);
	}
}

export default PreviewPage;
