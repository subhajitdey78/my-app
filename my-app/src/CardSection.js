import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
export default function CardSection() {
    return (
        <div class="bg-success mt-5">
        <div class="container">
            <h2 class="text-white">Lets meet new friends!</h2>
            <div class="row">
                <div class="col-4">
                    <Card />
                </div>
                <div class="col-4">
                    <Card />
                </div>
                <div class="col-4">
                    <Card />
                </div>
            </div>
        </div>
      </div>
    );
}