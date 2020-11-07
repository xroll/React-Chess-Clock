import React from 'react';

/**
 * React component that emulate the behaviour of a chess clock
 * Black player start the clock by pressing start button or his timer.
 * White player time start to countdown and each time the active player press his clock
 * it toggle the clock
 */
class Timer extends React.Component {

    constructor(props) {
        super(props); 
        
        //Le timer sera definit par les props qui lui sont passé
        //La valeur est en secondes.
        
        this.state = { 
            whiteTimer: this.props.initialTime,
            blackTimer: this.props.initialTime,
            isClockActive: false,
             };  
      
    }

    //Format the time
    formatTime(time) {
        return time < 10 ? (`0${time}`) : time;
    }

    render()
    {
        return (
            <>
                <button>{this.formatTime(this.state.whiteTimer)}</button>
                <button>{this.state.blackTimer}</button>
            </>
            
        );
    }
}

Timer.defaultProps = {
    whiteTimer: "8",
    blackTimer: "10",
}

export default Timer;