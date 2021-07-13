import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
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
		console.log('this is the NavBar')
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
			<nav className="navbar__items">
				<h1 className="navbar__logo">MARVEE</h1>
				<div className="menu__icon">
					
				</div>
				<ul>
					{
						MenuItems.map((obj, i) => {
							return <li key={i}><a className={obj.cName} href={obj.url}>{obj.title}</a></li>
						})
					}
				</ul>
				{/*<div className="header brand">
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
				</div>*/}
			</nav>
		)
	}
}

export default NavBar;
