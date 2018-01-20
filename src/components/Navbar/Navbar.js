import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Menu(props) {
	const items = props.menuItems;
	let list = [];

	for (let i = 0; i < items.length; i++) {
		list.push(<MenuItem key={i.toString()} title={items[i][0]} active={items[i][1]} link={items[i][2]} />);
	}

	return (
		<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			{list}
		</ul>
	);
}

function MenuItem(props) {
	if (props.active) {
		return (
			<li className="nav-item active">
				<Link to={props.link} className="nav-link">{props.title}</Link>
			</li>
		);
	} else {
		return (
			<li className="nav-item">
				<Link to={props.link} className="nav-link">{props.title}</Link>
			</li>
		);
	}
}

class Navbar extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a href="/" className="navbar-brand">DeepShirt</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbar">
					<Menu menuItems={this.props.menuItems}/>
					<div className="my-2 my-lg-2">
						<Link to="/login" className="btn btn-outline-success my-2 my-sm-0" role="button" id="goto-login">Login</Link>
						<Link to="/register" className="btn btn-outline-primary my-2 my-sm-0" role="button" id="goto-register">Sign Up</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
export {Navbar, Link};
