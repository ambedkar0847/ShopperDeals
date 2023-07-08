import React from "react"
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Ambedkar from "../imageComponents/Ambedkar";
import Pranay from "../imageComponents/Pranay";
import Sarath from "../imageComponents/Sarath";

function Contact() {

    return (

        <div className="screen_bg">

            <Nav />
            <Header />

            <section>
                <ul className="cards">
                    <li>
                        <a className="card-3">

                            <Pranay />
                            <div className="card__overlay">
                                <div className="card__header">

                                    <div className="card__header-text">
                                        <h3 className="card__title" >Pranay Vihar</h3>
                                        <span className="card__status">Computer Science</span>
                                        <span className="card__status">pjeereddy2022@my.fit.edu</span>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="card-3">
                            <Ambedkar />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <div className="card__header-text">


                                        <h3 className="card__title" >Ambedkar</h3>
                                        <span className="card__status">Computer Science</span>
                                        <span className="card__status">agandham2022@my.fit.edu</span>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="card-3">
                            <Sarath />
                            <div class="card__overlay">
                                <div class="card__header">

                                    <div class="card__header-text">
                                        <h3 class="card__title" >Sarath</h3>
                                        <span class="card__status">Computer Science</span>
                                        <span class="card__status">skari2022@my.fit.edu</span>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </li>

                </ul>
                <footer>
                    <p>&copy; All rights Reserved </p>
                </footer>
            </section>

            <Footer />
        </div>
    );



}



export default Contact;

