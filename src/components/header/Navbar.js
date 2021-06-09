import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";


class NavBar extends Component {
	render() {
		return(
			<nav>
				<div className="header">
					<h3>MARVY</h3>
				</div>
				<div className="header">
					<FontAwesomeIcon className="fa__bars" icon={faBars} />
				</div>
				<div className="top__nav">
					<ul>
						<li>HOME</li>
						<li>FASHION</li>
						<li>WEDDING</li>
						<li>EVENTS</li>
						<li>THE BRAND</li>
						<li>CONTACT US</li>
						<li>CONSULTATION</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBar;