//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "../js/component/secondscounter.jsx";


let counter = 0;

setInterval(function() {
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    //console.log(four, three, two, one);
    counter++;
    ReactDOM.render(<SimpleCounter digito1={one}digito2={two}digito3={three}digito4={four} />,document.querySelector("#app"));
}, 1000);