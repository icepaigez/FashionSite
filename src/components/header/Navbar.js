import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";


class NavBar extends Component {

	constructor() { 
		super()
		this.state = {
			menuClicked: false,
			menuItems: MenuItems
		}
	}

	toggleNavbar = () => { 
		this.setState({
			menuClicked: !this.state.menuClicked
		})
	}

	setActive = e => {
		let selectedItem = Number(e.currentTarget.id)
		let status = e.target.className
		if (!status.includes('selected')) {
			this.setState(prevState => ({
				menuItems: prevState.menuItems.map(obj => obj.id === selectedItem ? { ...obj, cName:'nav__links selected' } : { ...obj, cName:'nav__links' })
			}))
		}
	}

	render() {
		const { menuClicked, menuItems } = this.state;
		return(
			<nav className="navbar__items">
				<h1 className="navbar__logo">MARVEE</h1>
				<div onClick={this.toggleNavbar} className="menu__icon">
					{ menuClicked ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/> }
				</div>
				<ul className={menuClicked ? "nav__menu active" : "nav__menu"}>
					{
						menuItems.map(obj => {
							return <li onClick={this.setActive} id={obj.id} key={obj.id}><Link className={obj.cName} to={obj.url}>{obj.title}</Link></li>
						})
					}
				</ul>
			</nav> 
		)
	}
}

export default NavBar;
