import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";


class NavBar extends Component {

	constructor() {
		super()
		this.state = {
			navItem: [{id:1, active:true}, {id:2, active:false}, {id:3, active:false}, {id:4, active:false}, {id:5, active:false}],
		}
	}

	toggleNavbar = () => { 
		let navElem = document.querySelector('.top__nav')
		if (navElem.style.display === "") {
			navElem.style.display = "block"
		} else {
			navElem.style.display = ""
		}
	}

	setActive = e => {
		let selectedItem = Number(e.currentTarget.id)
		let status = e.currentTarget.className
		if (status !== "active") {
			this.setState(prevState => ({
				navItem: prevState.navItem.map(obj => obj.id === selectedItem ? { ...obj, active:true } : { ...obj, active:false })
			}))
		}
	}

	render() {
		const { navItem } = this.state;
		return(
			<nav className="navbar">
				<div className="header brand">
					<h3>MARVEE</h3>
				</div>
				<div onClick={this.toggleNavbar} className="header icon">
					<FontAwesomeIcon className="fa__bars" icon={faBars}/>
				</div>
				<div className="top__nav">
					<nav>
						<h5 onClick={this.setActive} className={navItem[0].active ? "active" : ""} id={navItem[0].id}>HOME</h5>
						<h5 onClick={this.setActive} className={navItem[1].active ? "active" : ""} id={navItem[1].id}>THE BRAND</h5>
						<h5 onClick={this.setActive} className={navItem[2].active ? "active" : ""} id={navItem[2].id}>CONSULTATION</h5>
						<h5 onClick={this.setActive} className={navItem[3].active ? "active" : ""} id={navItem[3].id}>MEDIA</h5>
						<h5 onClick={this.setActive} className={navItem[4].active ? "active" : ""} id={navItem[4].id}>CONTACT US</h5>
					</nav>
				</div>
			</nav>
		)
	}
}

export default NavBar;
