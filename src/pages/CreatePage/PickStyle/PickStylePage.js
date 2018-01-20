import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import './PickStylePage.css'
import { fadeIn } from 'react-animations'

class PickStylePage extends React.Component {
	constructor(props) {
		super(props);		
		this.pickstyle = this.pickstyle.bind(this);
		this.state = {
			styleImage : "https://dummyimage.com/800x800/ccc/fff.png",
		}
	}	


	pickstyle(image){
		this.setState({
			styleImage : image
		})
	}
	
	render() {
		return (
			<div>
				<Navbar menuItems={[["Home", false, "/"], ["Explore", false, "/explore"], ["Create", true, "/create/pickcontent"]]}/>
				<div className="container createPage">
					<h1 className="display-4">Style creator:</h1>
					
					<div className="stylePicker wow slideInRight">
						<p className="lead">
							Select the style 
						</p>
						<div className="row selectbox">				
							<div className="col-sm">
								<ul className="nav nav-tabs" role="tablist-style">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#pre-style" role="tab">Predefined styles</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#user-style" role="tab">Upload own style</a>
								</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane active" id="pre-style" role="tabpanel">
									
									</div>
									<div className="tab-pane" id="user-style" role="tabpanel">
									
										<ImageUpload callback={this.pickstyle}></ImageUpload>
									</div>
								</div>		
							</div>	
							<div className="col">
									Style image:
									<ImageThumbnail imagefile={this.state.styleImage}></ImageThumbnail>
							</div>
						</div>
					</div>
					
					<div className="row">	
						<div className="col generateBtn">
		
						<button type="button" class="btn btn-success"  onClick={this.buttonClicked}>Generate Shirt Style</button>
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


export default PickStylePage;
