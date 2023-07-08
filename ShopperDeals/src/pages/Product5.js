import React from "react"
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Image5 from "../imageComponents/Image5";


function Product5() {

    return (

        <div className="screen_bg">

            <Nav />
            <Header />

            <section>
                <div>
                    <h1 className="welcome-heading">Welcome to our Men's Clothing Store</h1>

                    <div className="introduction">
                        <p>Explore our website, shop with confidence, and elevate your wardrobe with our premium selection of men's clothing.</p>
                    </div>

                    <ul >
                        <li>
                            <div className="container">
                                <div className="image-wrapper">
                                    <Image5 className="image-style" />
                                </div>
                            </div>
                            <div >
                                <h3 className="card__title">5% off</h3>
                                <h3 className="card__title">Original Price : $45</h3>
                                <h3 className="card__title">After Discount : $42.5</h3>
                            </div>
                            <div >
                                <h3 className="text_description">Olive Green's</h3>

                                <span className="text_description">The checks pattern combined with the olive color strikes a balance between a casual and refined aesthetic. It offers a laid-back charm while still maintaining an element of elegance, making it suitable for various occasions and settings.</span>
                            </div>
                        </li>
                    </ul>
                </div>
              
            </section>

            <Footer />
        </div>
    );



}



export default Product5;

