import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";


class NavBar extends Component {
	render() {
		return(
			<nav className="navbar">
				<div className="header brand">
					<h3>MARVEE</h3>
				</div>
				<div className="header icon">
					<FontAwesomeIcon className="fa__bars" icon={faBars} />
				</div>
				<div className="top__nav">
					<nav>
						<h5>HOME</h5>
						<h5>THE BRAND</h5>
						<h5>CONSULTATION</h5>
						<h5>MEDIA</h5>
						<h5>CONTACT US</h5>
						<h5>TEAM</h5>
						<h5>ADDRESS</h5>
					</nav>
				</div>
			</nav>
		)
	}
}

export default NavBar;