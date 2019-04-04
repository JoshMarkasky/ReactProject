import React, { Component } from 'react';
import './form.css';
import {
    Container,
    Row,
    Col,
    Form
}from 'reactstrap';

class FormDisply extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({  [e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getInput(this.state.name, this.state.password, this.state.content);
        this.state.name = '';
        this.state.password = '';
        this.state.content = '';
    };

    componentDidMount() {

        window.setInterval(function(){
            // if(document.documentElement["clientWidth"],
            //     document.body["scrollWidth"],
            //     document.documentElement["scrollWidth"],
            //     document.body["offsetWidth"],
            // document.documentElement["offsetWidth"] >= 767){
                window.onscroll = function() {grow()};
            // } else {
            //     window.onscroll = function() { };
            //     document.getElementById('content').classList.remove = "hidden";
            //     document.getElementById('password').classList.remove = "hidden";
            //     document.getElementById('name').classList.remove = 'hidden';
            // }
        }, 100);


        const grow = () => {
            if (document.body.scrollTop > 500 && document.body.scrollTop < 1100 ||
                document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1100){

                document.getElementById('content').classList.remove = "hidden";
                document.getElementById('password').classList.remove = "hidden";
                document.getElementById('name').classList.remove = 'hidden';
                document.getElementById('content').className = "content";
                document.getElementById('password').className = 'show';
                document.getElementById('name').className = 'show';

            } else if (document.body.scrollTop < 500 && document.body.scrollTop < 1100 ||
                document.documentElement.scrollTop < 500 && document.documentElement.scrollTop < 1100){

                document.getElementById('content').classList.remove = "content";
                document.getElementById('password').classList.remove = "show";
                document.getElementById('name').classList.remove = "show";

                document.getElementById('content').className = "hidden";
                document.getElementById('password').className = "hidden";
                document.getElementById('name').className = "hidden";

            }
        };

    }

    render() {
        return (
            <Form id="form1" onSubmit={this.handleSubmit}>
                <Container id="form">
                    <Row id="inputs">
                        <Col className="col-sm-6">
                            <Row>
                                <div className="mx-auto">
                                    <input id="name" className="" placeholder="name" name={"name"} value={this.state.name} onChange={this.handleChange} />
                                    <p>{this.state.name}</p>
                                </div>
                            </Row>
                        </Col>
                        <Col className="col-sm-6">
                            <Row>
                                <div className="mx-auto">
                                    <input id="password" className="" placeholder="Password" name={"password"} value={this.state.password} onChange={this.handleChange} />
                                    <p>{this.state.password}</p>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row id="input">
                        <Col>
                            <textarea id="content" className="" placeholder="Content" name={"content"} value={this.state.content} onChange={this.handleChange} />
                            <p>{this.state.content}</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className={"mx-auto"}>
                            <input type="submit" className={"btn btn-primary"} />
                        </div>
                    </Row>
                    <Row>
                        <div className="ml-auto">
                            <Col>
                                <a href="#displyClock"><img src={require('./img/arrow-down.svg')} /></a>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </Form>
        );
    };
}

export default FormDisply;