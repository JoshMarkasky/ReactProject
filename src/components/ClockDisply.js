import React from 'react';
import './displyClock.css';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';




const Disply = (props) => {


    return (
        <Container id="displyClock">
            <Row id="timeClock">
            </Row>
            <Row id="timeDis">
                <div className="mx-auto time">
                    <span id="time1" lass >{props.data.hours}:</span>
                    <span id="time2">{props.data.mins}:</span>
                    <span id="time3">{props.data.secs}</span>
                </div>
            </Row>
            <Row>
                <a href="#formdisply"><img src={require('./img/arrow-down.svg')} /></a>
            </Row>
        </Container>
    )
};

export default Disply;
