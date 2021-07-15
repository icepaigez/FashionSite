import React, { Component } from "react";
import "./content.css";
import img1 from "../../images/back.jpg";
import img2 from "../../images/front.jpg";
import img3 from "../../images/grey.jpg";
import img4 from "../../images/low.jpg";
import img5 from "../../images/brown.jpg";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.jpg";
import slide6 from "../../images/slide6.jpg";
import slide7 from "../../images/slide7.jpg";
import slide8 from "../../images/slide8.jpg";
import slide9 from "../../images/slide9.jpg";
import slide10 from "../../images/slide10.jpg";


class Content extends Component {

	render() {
		return(
			<main>		
				<div className="section s1"></div>
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
				</section>
				
				<div className="section s3"></div>
				<section className="section__2">
					<h2>FOLLOW US ON <span><a href="https://www.instagram.com/marveeofficial/" target="_blank" rel="noreferrer">INSTAGRAM</a></span></h2>
					<div className="horizontal__slider">
						<div className="slider__container">
							<div className="item">
								<img src={slide1} alt=""/>
							</div>
							<div className="item">
								<img src={slide2} alt=""/>
							</div>
							<div className="item">
								<img src={slide3} alt=""/>
							</div>
							<div className="item">
								<img src={slide4} alt=""/>
							</div>
							<div className="item">
								<img src={slide5} alt=""/>
							</div>
							<div className="item">
								<img src={slide6} alt=""/>
							</div>
							<div className="item">
								<img src={slide7} alt=""/>
							</div>
							<div className="item">
								<img src={slide8} alt=""/>
							</div>
							<div className="item">
								<img src={slide9} alt=""/>
							</div>
							<div className="item">
								<img src={slide10} alt=""/>
							</div>
						</div>
					</div>
				</section>
			</main>
		)
	}
}

export default Content;