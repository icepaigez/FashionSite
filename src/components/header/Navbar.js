import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";


class NavBar extends Component {
	render() {
		return(
			<nav>
				<div className="header brand">
					<h3>MARVY</h3>
				</div>
				<div className="header icon">
					<FontAwesomeIcon className="fa__bars" icon={faBars} />
				</div>
				<div className="top__nav">
					<nav>
						<h5>HOME</h5>
						<h5>WEDDING</h5>
						<h5>EVENTS</h5>
						<h5>THE BRAND</h5>
						<h5>CONTACT US</h5>
						<h5>CONSULTATION</h5>
					</nav>
				</div>
			</nav>
		)
	}
}

export default NavBar;