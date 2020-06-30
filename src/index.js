import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


class StopWatch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLive : false,
            currentTime : new Date(0,0,0,0,0,0,0),  //00:00:00
        }
        
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);
    }

    componentDidMount() {
        this.setState(() => ({
            currentTime: new Date(0, 0, 0, 0, 0, 0, 0)
        }));
    }

    handleStartClick() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState(() => ({
            isLive: true,
        }));
    }

    handleResetClick() {
        this.setState(() => ({
            currentTime : new Date(0,0,0,0,0,0,0), //00:00:00
        }));
    }

    handlePauseClick() {
        clearInterval(this.timerID)
        this.setState(() => ({
            isLive: false
        }));
    }

    tick() {
        this.setState(() => ({
            temp : this.state.currentTime.setSeconds(this.state.currentTime.getSeconds() + 1)  
        }));
        debugger
    }
    
    render() {;
        debugger;
        return (
            <div> 
                <h2>{this.state.currentTime.toTimeString().split(' ')[0]}</h2>
                {
                this.state.isLive ? 
                <div>
                    <button id="idOfPauseButton"className="btn" onClick={this.handlePauseClick}>Pause</button> 
                </div> :
                <div>
                    <button id="idOfResetButton" className="btn" onClick={this.handleResetClick}>Reset</button>
                    <button id="idOfStartButton"className="btn" onClick={this.handleStartClick}>Start</button>
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
