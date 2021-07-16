import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faPinterest, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
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

const Base = ({ scroll }) => {
	return(
		<section ref={scroll} className="section__2">
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
			<div className="divider"><hr/></div>
				<div className="footer">
					<p className="addr">LAGOS</p>
					<p>Rainbow Drive, Peace Estate, Ikeja</p>
					<p>To schedule an appointment: 929-293-1272 | <a href="mailto:info@marvee.org?subject=Mail from Our Website">info@marvee.org</a></p>
				</div>
				<div className="socials">
					<a href="https://www.instagram.com/marveeofficial/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa__bars" icon={faInstagram}/></a>
					<a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa__bars" icon={faTwitter}/></a>
					<a href="https://www.pinterest.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa__bars" icon={faPinterest}/></a>
					<a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa__bars" icon={faFacebookSquare}/></a>
				</div>
		</section>
	)
}

export default Base;