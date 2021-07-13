import React, { Component } from "react";
import "./content.css";
import img1 from "../../images/back.jpg";
import img2 from "../../images/front.jpg";
import img3 from "../../images/grey.jpg";
import img4 from "../../images/low.jpg";
import img5 from "../../images/brown.jpg";


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
				<div className="section s2"></div>
				<section>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</section>
				<div className="section s3"></div>
				<section>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</section>
			</main>
		)
	}
}

export default Content;