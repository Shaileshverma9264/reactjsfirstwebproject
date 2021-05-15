import React from 'react';
import Common from './Common'
import { NavLink } from 'react-router-dom';
import web from "../src/images/img3.jpg";

const About = () => {
    return (
        <>
            <Common name='welcome to about page' imgsrc={web} visit='/contact' btname="contact now" />
        </>
    )
};
export default About;