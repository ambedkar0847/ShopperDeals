import React from "react"
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import HomeImages from "../HomeImage"
import HomeImages2 from "../HomeImage2"
import UseData from "../data/useData"
import { Link } from 'react-router-dom';



function Home({ isLoggedIn }) {

	const [data] = UseData();
	console.log("ambedkar " + data);

	return (
		<div className="screen_bg">
			<Nav />
			<Header />
			<article>
				<section>
					<div className="introduction">
						<p>Explore our website, shop with confidence, and elevate your wardrobe with our premium selection of men's
							clothing.</p>
					</div>
					<p className="paragraph" >Welcome to our men's
						clothing website! Discover a wide range of stylish and high-quality
						clothing options tailored for the modern man. From casual wear to formal attire, we offer the latest trends
						and timeless classics to elevate your wardrobe. Shop with confidence and enjoy a seamless shopping experience
						with us.</p>

					<div className="image-container">
						
							<div className="image-with-text">
							<Link to="/deal" >
								<a>
									<HomeImages />
								</a>
								</Link>
								<p className="introduction">
									Casual wear
								</p>

							</div>
					
					
							<div className="image-with-text">
							<Link to="/deal" >
								<a>
									<HomeImages2 />
								</a>
								</Link>
								<p className="introduction">
									Formal wear
								</p>
							</div>
					
					</div>
				</section >
				<Footer />
			</article>
		</div>
	);



}

export default Home;

