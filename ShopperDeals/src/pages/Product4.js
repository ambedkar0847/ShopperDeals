import React from "react"
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Image4 from "../imageComponents/Image4";


function Product4() {

    return (

        <div className="screen_bg">

            <Nav />
            <Header />

            <section>
                <div>
                    <div className="introduction">
                        <p>Explore our website, shop with confidence, and elevate your wardrobe with our premium selection of men's clothing.</p>
                    </div>

                    <ul >
                        <li>
                            <div className="container">
                                <div className="image-wrapper">
                                    <Image4 className="image-style" />
                                </div>
                            </div>
                            <div >
                                <h3 className="card__title">25% off</h3>
                                <h3 className="card__title">Original Price : $100</h3>
                                <h3 className="card__title">After Discount : $75</h3>
                            </div>
                            <div >
                                <h3 className="text_description">Casual Green's</h3>

                                <span className="text_description">The checks shirt features a checkered or plaid pattern, created by intersecting horizontal and vertical lines of different colors. This pattern adds visual interest and depth to the shirt, making it a standout piece in your wardrobe.</span>
                            </div>
                        </li>
                    </ul>
                </div>
              
            </section>

            <Footer />
        </div>
    );



}



export default Product4;

