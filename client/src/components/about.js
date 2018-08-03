import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
    <div>
        <h1> About </h1>
        <p> About text here </p>
        <p> <Link to ="/Products">Go to MDF fretwork panel page </Link> </p>
        <p> <Link to ="/wavePanels">Go to 3d Wave Panel page </Link> </p>
    </div>
    )
}

export default About;