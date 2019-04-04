import React, { Component } from 'react';
import Navbar1 from './components/navbar';
import FormDisply from  './components/form';
import Clock from './components/Clock';
import Intro from './components/Intro';
import Disply from "./components/ClockDisply";
import FormDisply2 from "./components/FormDisply";
import Footer from './components/footer';
import {
    Container
} from 'reactstrap';
import './App.css';

// #F6F4F5   white
// #8A859C
// #A2A1B5
// #828E89
// #272C3E

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            hours: '',
            mins: '',
            secs: '',
            name: '',
            password: '',
            content: ''
        }
    }

    getTime = (hours, mins, secs) => {
        this.setState({
            hours: hours,
            mins: mins,
            secs: secs
        })
    };

    getInput = (name, password, content) => {
        this.setState({
            name: name,
            password: password,
            content: content
        })
    };

    componentDidMount() {

        if(document.body.scrollTop > 0 && document.body.scrollTop < 500 ||
            document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 500){

        } else if (document.body.scrollTop > 500 && document.body.scrollTop < 1400 ||
            document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1400){
            //change navbar button to active

        } else if(document.body.scrollTop > 1400 && document.body.scrollTop < 2100 ||
            document.documentElement.scrollTop > 1400 && document.documentElement.scrollTop < 2100) {
            //change navbar button to active

        } else if(document.body.scrollTop > 2100 && document.body.scrollTop < 2700 ||
            document.documentElement.scrollTop > 2100 && document.documentElement.scrollTop < 2700){
           
        }

    }

    render() {
    return (
        <div>
            <Navbar1 data={this.state}/>
            <Intro />
            <Clock getTime={this.getTime} />
            <Container id="container2">
                <span id="two"><FormDisply getInput={this.getInput}/></span>
            </Container>
            <Disply data={this.state}/>
            <FormDisply2 data={this.state}/>
            <Footer />
        </div>
    );
  }
}

export default App;
