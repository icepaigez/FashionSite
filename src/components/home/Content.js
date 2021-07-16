import React, { Component } from "react";
import Base from "../foot/Base";
import "./content.css";
import img1 from "../../images/back.jpg";
import img2 from "../../images/front.jpg";
import img3 from "../../images/grey.jpg";
import img4 from "../../images/low.jpg";
import img5 from "../../images/brown.jpg";



class Content extends Component {

	constructor() {
		super()
		this.scrollDiv = React.createRef();
	}

	render() {
		return(
			<main>		
				<div className="section s1">
					<div className="arrow">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<section className="section__1">
					<h1>DISCOVER</h1>
					<div className="collections">
						<div className="zone green">
							<img src={img1} alt=""/>
							<h3>BRIDE COLLECTION</h3>
							<button>Newest styles</button>
						</div>
						<div className="zone red">
							<img src={img2} alt=""/>
							<h3>TRAD COUTURE</h3>
							<button>Newest styles</button>
						</div>
						<div className="zone blue">
							<img src={img3} alt=""/>
							<h3>EVENING WEAR</h3>
							<button>Newest styles</button>
						</div> 
						<div className="zone yellow">
							<img src={img4} alt=""/>
							<h3>RUNWAY</h3>
							<button>Newest styles</button>
						</div>
						<div className="zone">
							<img src={img5} alt=""/>
							<h3>BOSS LADY</h3>
							<button>Newest styles</button>
						</div>
					</div>
					<div 
						className="arrow__2"
						onClick={() => this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' })}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</section>
				
				<div className="section s3"></div>
				<Base scroll={this.scrollDiv}/>
			</main>
		)
	}
}

export default Content;