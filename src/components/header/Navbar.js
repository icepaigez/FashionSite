import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";


class NavBar extends Component {

	toggleNavbar = () => {
		let navElem = document.querySelector('.top__nav')
		if (navElem.style.display === "") {
			navElem.style.display = "block"
		} else {
			navElem.style.display = ""
		}
	}

	render() {
		
		return(
			<nav className="navbar">
				<div className="header brand">
					<h3>MARVEE</h3>
				</div>
				<div onClick={this.toggleNavbar} className="header icon">
					<FontAwesomeIcon className="fa__bars" icon={faBars} />
				</div>
				<div className="top__nav">
					<nav>
						<h5 className="active">HOME</h5>
						<h5>THE BRAND</h5>
						<h5>CONSULTATION</h5>
						<h5>MEDIA</h5>
						<h5>CONTACT US</h5>
					</nav>
				</div>
			</nav>
		)
	}
}

export default NavBar;