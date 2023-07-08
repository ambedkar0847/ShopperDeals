import React from "react"
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Image3 from "../imageComponents/Image3";


function Product3() {

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
                                    <Image3 className="image-style" />
                                </div>
                            </div>
                            <div >
                                <h3 className="card__title">FLAT 50% off</h3>
                                <h3 className="card__title">Original Price : $120</h3>
                                <h3 className="card__title">After Discount : $60</h3>
                            </div>
                            <div >
                                <h3 className="text_description">Blue Formals</h3>

                                <span className="text_description">The blue formal shirt features a traditional button-up front, creating a clean and polished look. This classic design allows for easy dressing and adds a touch of formality to the shirt.</span>
                            </div>
                        </li>
                    </ul>
                </div>
              
            </section>

            <Footer />
        </div>
    );



}



export default Product3;

