import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AppSection() {
    return(
        <div class="bg-success text-center">
        <p class="display-4 text-white p-4">Discover the web app</p>
        <p class="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam magni eos consequatur laborum, vero nemo! Fuga accusantium 
        </p>
        <div class="row p-4">
            <div class="col-12">
                <button class="btn btn-warning btn-lg me-md-4">Play Store</button>
                <button class="btn btn-warning btn-lg">App Store</button>
            </div>
        </div>
      </div>
    )
}
