import React from "react"
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Image2 from "../imageComponents/Image2";


function Product2() {

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
                                    <Image2 className="image-style" />
                                </div>
                            </div>
                            <div >
                                <h3 className="card__title">25% off</h3>
                                <h3 className="card__title">Original Price : $80</h3>
                                <h3 className="card__title">After Discount : $60</h3>
                            </div>
                            <div >
                                <h3 className="text_description">Polo shirt</h3>

                                <span className="text_description">The classic polo shirt boasts a simple and elegant design that has stood the test of time. It features a clean and streamlined silhouette, allowing it to be easily paired with various bottoms, such as jeans, chinos, or shorts.</span>
                            </div>
                        </li>
                    </ul>
                </div>
              
            </section>

            <Footer />
        </div>
    );



}



export default Product2;

