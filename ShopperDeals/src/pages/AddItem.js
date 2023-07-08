import React from "react"
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import MyForm from "./MyForm";

function AddItem() {

    return (

        <div className="screen_bg">

            <Nav />
            <Header />

            <h1 >Add Items</h1>

            <MyForm />

            <Footer />
        </div>
    );



}



export default AddItem;

