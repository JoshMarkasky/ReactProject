import React, { Component } from 'react';
import ClockDisply from "./ClockDisply";


let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: time,
            hours: today.getHours(),
            mins: today.getMinutes(),
            secs: today.getSeconds(),
            number: 2
        };
    }

    componentDidMount() {

        const time1 = document.getElementById('time1');
        const time2 = document.getElementById('time2');
        const time3 = document.getElementById('time3');

        const colors = ['red', 'blue', 'purple', 'brown', 'black', 'green', 'yellow'];

        let changeColors = () => {
            let random1 = Math.floor(Math.random() * 7);
            let random2 = Math.floor(Math.random() * 7);
            let random3 = Math.floor(Math.random() * 7);
            time1.style.color = colors[random1];
            time2.style.color = colors[random2];
            time3.style.color = colors[random3];
        };

        setInterval(() => this.setState({
            change: changeColors(),
        }), 1000);

        this.interval = setInterval(() => this.setState({
            mins: new Date().getMinutes(),
            secs: new Date().getSeconds(),
            hours: new Date().getHours()
        }), 1000);
    }

    interval = setInterval(() => {
      if(this.props.getTime != null) {
          this.props.getTime(this.state.hours, this.state.mins, this.state.secs)
        } else {
          console.log("this is null");
      }
      }, 1000);


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        const clockP = {
            marginBottom: "0"
        };

        return(
            <p style={clockP}> </p>
        );
    }

}

export default Clock;
