import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"



class StartTime extends React.Component {
    render(){
        return (
            <div>
                <button className="btn">Start</button>
            </div>
        );
    }
}

class ResetTime extends React.Component {
    render(){
        return (
            <div>
                <button className="btn">Reset</button>
            </div>
        );
    }
}

class StopTime extends React.Component {
    render(){
        return (
            <div>
                <button className="btn">Stop</button>
            </div>
        );
    }
}

class StopWatch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isStop : true,
            currentTime : new Date(0,0,0,0,0,0,0),
        }
    }
    
    render() {
        return (
            <div> 
                <h2>{this.state.currentTime.toTimeString().split(' ')[0]}</h2>
                {
                this.state.isStop ? 
                <div>
                    <StartTime /> <ResetTime />
                </div> : 
                <div>
                    <StopTime />
                </div>
                }
            </div>
        );
    }
}


ReactDOM.render(
    <StopWatch />,
    document.getElementById('root')
);
