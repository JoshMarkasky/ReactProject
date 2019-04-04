import React from 'react';
import './Intro.css';
import {
    Container,
    Row,
    Col
}from 'reactstrap';

const Intro = () => {

    window.setInterval(function(){
        // if(document.documentElement["clientWidth"],
        //     document.body["scrollWidth"],
        //     document.documentElement["scrollWidth"],
        //     document.body["offsetWidth"],
        // document.documentElement["offsetWidth"] >= 767){
            window.onscroll = function() {introFun()};
        // } else {
        //     window.onscroll = function() { };
        //
        // }
    }, 100);

    let introFun = () => {
        if(document.body.scrollTop > 0 && document.body.scrollTop < 300 ||
            document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 300){
            document.getElementById('Intro').className = 'Intro';
            document.getElementById('Intro').classList.remove('hidden');
        } else if (document.body.scrollTop > 300 && document.body.scrollTop < 1400 ||
            document.documentElement.scrollTop > 300 && document.documentElement.scrollTop < 1400){
            document.getElementById("Intro").classList.remove("Intro");
            document.getElementById('Intro').className = 'hidden';
        }
    };

    return(
        <Container>
            <div className="Intro" id="Intro">
                <Row>
                    <Col className="col-md-6 font1">
                        <h1>My React Showcase!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-12">
                        <p>
                            In this showcase where I will show case dynamic components that send data between
                            all components to update and render dynamically. Not only does this showcase my skills
                            in react but also my front end design. All animation were done with basic css and also
                            using reactstrap
                        </p>
                    </Col>
                </Row>
                <Row>
                    <div className="mx-auto">
                        <a href="#form1"><button id="start" className="btn btn-primary start">Start</button></a>
                    </div>
                </Row>
                <Row>
                    <div className="mr-auto down">
                        <a href="#form1"><img src={require('./img/arrow-down.svg')} /></a>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default Intro;