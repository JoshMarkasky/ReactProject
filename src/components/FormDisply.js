import React from 'react';
import './formdisply.css';
import {
    Container,
    Row,
    Col
}from 'reactstrap';

const FormDisply2 = (props) => {
    return(
        <Container id="formdisply">
            <Row>
                <div className="mx-auto">
                    <p>your input from the form component transfers to this Stateless component</p>
                </div>
            </Row>
            <Row>
                <Col className="col-md-6 colum">
                    <Row>
                        <div className="mx-auto">
                            <h2>Name:</h2>
                            <h1>{props.data.name}</h1>
                        </div>
                    </Row>
                </Col>
                <Col className="col-md-6 colum">
                    <Row>
                        <div className="mx-auto">
                            <h2>Password:</h2>
                            <h1>{props.data.password}</h1>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <div className="mx-auto colum">
                    <h2>Contact</h2>
                    <h1>{props.data.content}</h1>
                </div>
            </Row>
        </Container>
    )
};

export default FormDisply2;
