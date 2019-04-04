import React from 'react';
import './footer.css';
import {
    Container,
    Row
}from 'reactstrap';


const Footer = () => {

    return (
        <Container id="Footer">
            <Row>
                <div id="info">
                    <h2>Email: markasky.Josh@gmail.com</h2><br />
                    <a href="https://www.linkedin.com/in/joshua-m-4883b0163/"><h2>LinkedIn: Joshua Markasky</h2></a><br />
                    <a href="https://github.com/JoshMarkasky"><h2>github: JoshMarkasky</h2></a><br />
                </div>
            </Row>
        </Container>
    )
};

export default Footer;