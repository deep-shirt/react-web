import React from 'react';
import {Navbar,Link} from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import './PickContent.css';
import { fadeIn } from 'react-animations';
import $ from 'jquery';
import firebase from '../../../firebase';


class PickContent extends React.Component {

	constructor(props) {
		super(props);
		this.pickcontent = this.pickcontent.bind(this);
		var contentImage = window.localStorage.getItem('contentImage')
		var imageSet = true;
		if(contentImage == undefined){
			contentImage = "https://dummyimage.com/800x800/ccc/fff.png";
			imageSet = false;
		}
		this.state = {
			contentImage : contentImage,
			imageSet:imageSet
		}
	}

	pickcontent(image){
		this.setState({
			contentImage : image,
			imageSet:true
		})
		window.localStorage.setItem('contentImage', image);
	}

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", true, "/create/pickcontent"]]}/>
				<div className="container createPage">
					<h1 className="display-4">Style Creator</h1>
					<div className="contentPicker wow slideInRight" ref="contentPicker">
						<p className="lead">
							Upload the image you want to style.
						</p>
						<div className="row selectbox">
							<div className="col-md">
								<ul className="nav nav-tabs" role="tablist">

								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#profile" role="tab">Search image</a>
								</li>
								<li className="nav-item">
									<a className="nav-link " data-toggle="tab" href="#home" role="tab">Upload picture</a>
								</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane " id="home" role="tabpanel">
										<ImageUpload callback={this.pickcontent}></ImageUpload>
									</div>
									<div className="tab-pane active" id="profile" role="tabpanel">
										<FlickerPicker callback={this.pickcontent}></FlickerPicker>
									</div>
								</div>
							</div>
							<div className="col-md">
								<p class="font-weight-bold">Selected Main image:</p>
								<ImageThumbnail imagefile={this.state.contentImage}></ImageThumbnail>
							</div>
						</div>
					</div>

					<div className="row float-right">
						<div class="btn-group " role="group" aria-label="Basic example">
							<Link to="/create/pickstyle"  type="button" className={"btn btn-success " + (this.state.imageSet ? '' : 'disabled')}>Pick Style image <span class="oi oi-chevron-right"></span></Link>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

const GaleryItem = (props) => {
	return (
		<div className="col-12 col-md-4">
			<div className="card wow fadeIn" data-wow-delay={props.index % 3 / 5 + 0.2 + "s"}>
				<img src={props.url} onClick={props.callback} alt="" className="card-img-top"/>
			</div>
		</div>
	);
}

const Galery = (props) => {
	const itemList = [];

	for (let i = 0; i < props.images.length; i++) {
		let image =  props.images[i];
		var url = "https://farm"+image.farm+".staticflickr.com/"+image.server+"/"+image.id+"_"+image.secret+".jpg";
		itemList.push(<GaleryItem index={i} callback={props.callback} key={image.id} title={image.title} url={url}/>);
	}

	return (
		<div className="row galery">{itemList}</div>
	);
}

class FlickerPicker extends React.Component {
	constructor(props) {
		super(props)
		this.search = this.search.bind(this);
		this.click = this.click.bind(this);
		this.state = {
			images: [],
		}
	}

	click(e){
		var image = e.target.src;
		this.props.callback(image);
	}
	search(e) {
		var text = this.refs.search.value;
		//https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=9fea3197738d3350425e6b6a2c36a4d4&text=golden%20state&sort=relevance&content_type=1&media=photos&per_page=20&parse_tags=1&format=json&nojsoncallback=1&api_key=9fea3197738d3350425e6b6a2c36a4d4
		var query = {
			method: "flickr.photos.search",
			format:"json",
			nojsoncallback:1,
			api_key : "9fea3197738d3350425e6b6a2c36a4d4",
			text : text,
			sort:"relevance",
			//sort: "interestingness-desc",
			content_type: 1,
			media: "photos",
			per_page: 20,
			parse_tags:1
		}
		var self = this;
		$.get( "https://api.flickr.com/services/rest", query )
		.done(function( res ) {
			console.log('yay!', res);
			self.setState({
				images: res.photos.photo
			})
		});
	}
	render() {
		return (
			<div>
				<div className="input-group mb-3">

  				<input type="text" ref="search" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"></input>
				  <div className="input-group-append">
    				<button onClick={this.search} className="btn btn-outline-secondary" type="button">Search</button>
  				</div>
			</div>
			  <Galery images={this.state.images} callback={this.click}></Galery>
			</div>
		)
	}
}

class ImageUpload extends React.Component {
	constructor(props) {
		super(props)
		this.pickfile = this.pickfile.bind(this);
	}
	uploadFile(file,cb){
		var storageRef = firebase.storage().ref();

		var ref = storageRef.child('uploaded/content/'+file.name);
		ref.put(file).then(function(snapshot) {
			var url = snapshot.downloadURL;
			cb(url);
		});
		// Initialize Firebase
	}
	pickfile(e) {
		var files =e.target.files;
		if(files.length > 0){
			this.uploadFile(files[0],this.props.callback)
		}
	}
	render() {
		return (
			<div>
				<form>
					<div className="form-group">
						<input  accept=".jpg" type="file" onChange={this.pickfile} className="form-control-file"></input>
					</div>
				</form>
			</div>
		)
	}
}

function ImageThumbnail(props) {
	if (props.imagefile != undefined){
		return (
			<div>
				<div className="card">
					<img className="card-img-top thumbnailIMG" src={props.imagefile} alt="Card image cap"></img>
				</div>
			</div>
		);
	}
	else return (<div></div>);
}

export default PickContent;
