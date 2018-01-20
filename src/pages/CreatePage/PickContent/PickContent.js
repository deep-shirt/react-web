import React from 'react';
import {Navbar,Link} from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import './PickContent.css'
import { fadeIn } from 'react-animations'

class PickContent extends React.Component {
	constructor(props) {
		super(props);		
		this.pickcontent = this.pickcontent.bind(this);
		this.state = {
			contentImage : "https://dummyimage.com/800x800/ccc/fff.png"
		}
	}	
	pickcontent(image){
		this.setState({
			contentImage : image
		})
	}

	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", true, "/create/pickcontent"]]}/>
				<div className="container createPage">
					<h1 className="display-4">Style creator:</h1>
					<div className="contentPicker wow slideInRight" ref="contentPicker">
						<p className="lead">
							Upload the image you want to style.
						</p>
						<div className="row selectbox">				
							<div className="col-sm">
								<ul className="nav nav-tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#home" role="tab">Upload picture</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#profile" role="tab">Select Flickr image</a>
								</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane active" id="home" role="tabpanel">
										<ImageUpload callback={this.pickcontent}></ImageUpload>
									</div>
									<div className="tab-pane" id="profile" role="tabpanel">Flickr
									</div>
								</div>		
							</div>	
							<div className="col">
								Content image:
								<ImageThumbnail imagefile={this.state.contentImage}></ImageThumbnail>
							</div>
						</div>
					</div>
										
					<div className="row">	
						<div className="col generateBtn">
							<Link to="/create/pickstyle" className="btn btn-success" role="button" id="goto-login">Pick Style</Link>
						</div>
					</div>
				</div>
				
				
				<Footer />
			</div>
		);
	}
}

class ImageUpload extends React.Component {
	constructor(props) {
		super(props)
		this.pickfile = this.pickfile.bind(this);
	}
	pickfile(e,callback) {
		var files =e.target.files; 
		if(files.length > 0){
			var reader = new FileReader();
			var self = this;
			// Closure to capture the file information.
			reader.onload = function(fileE) {
				self.props.callback(fileE.target.result)
			}
			// Read in the image file as a data URL.
			reader.readAsDataURL(files[0]);
		}
	}
	render() {
		return (
			<div>
				<form>
					<div className="form-group">					
						<div className="dragDiv">Drag file here</div>
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
					<img height="200px" className="card-img-top" src={props.imagefile} alt="Card image cap"></img>
				</div>
			</div>
		);
	}
	else return (<div></div>);
}


export default PickContent;
