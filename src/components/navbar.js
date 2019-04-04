//React Navbar
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import Clock from './Clock';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Container from "reactstrap/es/Container";

class Navbar1 extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {

        document.getElementById('button1').addEventListener('click', isActive);
        document.getElementById('button2').addEventListener('click', isActive);
        document.getElementById('button3').addEventListener('click', isActive);
        document.getElementById('button4').addEventListener('click', isActive);
        document.getElementById('button5').addEventListener('click', isActive);

        let button1 = document.getElementById('button1');
        let button2 = document.getElementById('button2');
        let button3 = document.getElementById('button3');
        let button4 = document.getElementById('button4');
        let button5 = document.getElementById('button5');
        let two = document.getElementById('two');
        let one = document.getElementById('Intro');

        let sec = document.getElementById('sec');
        let min = document.getElementById('min');
        let hour = document.getElementById('hours');
        let isVisible = false;

        let colors = ['red', 'blue', 'purple', 'brown', 'black', 'green', 'yellow'];
        

        function isActive(){
            button1.classList.remove('isActive');
            button2.classList.remove('isActive');
            button3.classList.remove('isActive');
            this.classList.toggle("isActive");
        }

        function changecolor() {
            let number1 = Math.floor(Math.random() * 7);
            let number2 = Math.floor(Math.random() * 7);
            let number3 = Math.floor(Math.random() * 7);
            sec.style.color = colors[number1];
            min.style.color = colors[number2];
            hour.style.color = colors[number3];
        }

        window.setInterval(function(){
            checkPostion();
            if(document.documentElement["clientWidth"],
                document.body["scrollWidth"],
                document.documentElement["scrollWidth"],
                document.body["offsetWidth"],
            document.documentElement["offsetWidth"] >= 767){
                window.onscroll = function() {checkPostion()};
            } else {
                window.onscroll = function() { };
                
            }
        }, 100);

        let checkPostion = () => {
            if(document.body.scrollTop > 0 && document.body.scrollTop < 350 ||
                document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 350){
                //change navbar button to active
                button2.classList.remove('isActive');
                button3.classList.remove('isActive');
                button4.classList.remove('isActive');
                button5.classList.remove('isActive');

                button1.classList.add("isActive");
            } else if (document.body.scrollTop > 500 && document.body.scrollTop < 1100 ||
                document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1100){
                //change navbar button to active
                button1.classList.remove('isActive');
                button3.classList.remove('isActive');
                button4.classList.remove('isActive');
                button5.classList.remove('isActive');
                button2.classList.add("isActive");
            } else if(document.body.scrollTop > 1200 && document.body.scrollTop < 2100 ||
                document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 2100) {
                //change navbar button to active
                button2.classList.remove('isActive');
                button1.classList.remove('isActive');
                button4.classList.remove('isActive');
                button5.classList.remove('isActive');
                button3.classList.add("isActive");
            } else if(document.body.scrollTop > 2100 && document.body.scrollTop < 2700 ||
                document.documentElement.scrollTop > 2100 && document.documentElement.scrollTop < 2700){
                button2.classList.remove('isActive');
                button1.classList.remove('isActive');
                button3.classList.remove('isActive');
                button5.classList.remove('isActive');
                button4.classList.add("isActive");
            } else if (document.body.scrollTop > 2600 && document.body.scrollTop < 3000 ||
                document.documentElement.scrollTop > 2600 && document.documentElement.scrollTop < 3000){
                button2.classList.remove('isActive');
                button1.classList.remove('isActive');
                button3.classList.remove('isActive');
                button4.classList.remove('isActive');

                button5.classList.add("isActive");
            }

        };


       


        this.interval = setInterval(() => this.setState({
            change: changecolor(),
        }), 1000);

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar id="navbar" className="sticky-top top" color="light" light expand="md" >
                <Container>
                    <NavbarBrand id="brand" href="#">47</NavbarBrand>
                    <div id="time" className="mx-auto">
                        <span id="hours">{this.props.data.hours}</span>:
                        <span id="min">{this.props.data.mins}</span>:
                        <span id="sec">{this.props.data.secs}</span>
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav id="Navbuttons" className="ml-auto" navbar>
                            <NavItem>
                                <a href="#navbar"><button id="button1" className="btn btn-light isActive"><NavLink>Section 1</NavLink></button></a>
                            </NavItem>
                            <NavItem>
                                <a href="#form1"><button id="button2" className="btn btn-light"><NavLink>Section 2</NavLink></button></a>
                            </NavItem>
                            <NavItem>
                                <a href="#displyClock"><button id="button3" className="btn btn-light"><NavLink>Section 3</NavLink></button></a>
                            </NavItem>
                            <NavItem>
                                <a href="#formdisply"><button id="button4" className="btn btn-light"><NavLink>Section 4</NavLink></button></a>
                            </NavItem>
                            <NavItem>
                                <a href="#Footer"><button id="button5" className="btn btn-light"><NavLink>Section 5</NavLink></button></a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navbar1;

