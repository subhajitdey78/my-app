import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Banner() {
    return (
        <div className="container-fluid bg-secondary text-light padding-5">
        <h1 className="display-4">App loks great!</h1>
        <p className="Lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Praesentium, dolorem, ullam a eaque perferendis animi culpa asperiores quod architecto fuga atque optio harum ea maxime labore natus. 
            Officia, quam eligendi!
        </p>
        <hr className="my-4" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a className="btn btn-success btn-lg" href="#">React is awasome </a>
      </div>
    );
}