import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends Component {
	render() {
		return(
			<nav>
				<h3>Marvy</h3>
				<FontAwesomeIcon icon="fa-solid fa-bars" />
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