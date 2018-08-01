import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
    <div>
        <h1> About </h1>
        <p> About text here </p>
        <p> <Link to ="/products">Go to product page </Link> </p>
    </div>
    )
}

export default About;