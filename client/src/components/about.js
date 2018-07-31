import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
    <div>
        <h1> About </h1>
        <p> About text here </p>
        <p> <Link to ="/sharks">Go to sharks page </Link> </p>
    </div>
    )
}

export default About;