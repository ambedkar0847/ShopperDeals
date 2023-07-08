import React from "react"
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Image1 from "../imageComponents/Image1";


function Product1() {

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
                                    <Image1 className="image-style" />
                                </div>
                            </div>
                            <div >
                                <h3 className="card__title">25% off</h3>
                                <h3 className="card__title">Original Price : $78</h3>
                                <h3 className="card__title">After Discount : $60</h3>
                            </div>
                            <div >
                                <h3 className="text_description">Jeans shirt</h3>

                                <span className="text_description">Jeans shirts have a classic and enduring style that transcends trends. They have been a wardrobe staple for decades, maintaining their popularity and relevance in the fashion world.</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>

            <Footer />
        </div>
    );



}



export default Product1;

