import React from 'react';
import {Navbar,Link} from '../../../components/Navbar/Navbar';
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

	pickstyle(imageElement){
		this.setState({
			styleImage : imageElement.target.src
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
										<Galery callback={this.pickstyle}></Galery>
									</div>
									<div className="tab-pane" id="user-style" role="tabpanel">
										
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
							<Link to="/create/pickstyle" className="btn btn-success" role="button" id="goto-login">Generate Design</Link>
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
	const  urls = [
		"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/la_muse.jpg",
		"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/rain_princess.jpg",
		"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/the_scream.jpg",
		"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/the_shipwreck_of_the_minotaur.jpg",
		"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/udnie.jpg",
		"https://raw.githubusercontent.com/lengstrom/fast-style-transfer/master/examples/style/wave.jpg"
	];
	const itemList = [];

	for (let i = 0; i < urls.length; i++) {
		itemList.push(<GaleryItem index={i} key={urls[i]}  callback={props.callback} url={urls[i]}/>);
	}

	return (
		<div className="row galery">{itemList}</div>
	);
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

export default PickStylePage;
