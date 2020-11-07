import React from 'react';
import Timer from './Timer';

/**
 * This React component set the timer before the display of <Timer/> component
 * 
 * todo : 
 * - Pass the value to timer component
 * - 
 */

class SetTimer extends React.Component {

    constructor(props) {
        super(props);   
                
        this.state = { 
            standardsTime : ['1', '3', '5', '10', '15', '20'],
            customTime: {
                hours: this.props.hours,
                minutes: this.props.minutes,
                seconds: this.props.seconds,
            }
        }; 
      
    }

    sendData = (data) => {
        this.props.setTimerData(data);
   }

    //Define the button list for standards times defined in props
    standardTimeButtons(){
    
        const standardTimeValues = this.state.standardsTime;

        const buttonList = standardTimeValues.map((values) =>
            <button onClick={(e) => (this.sendData(e.target.value))} 
                value={values} 
                key={values}>{values}
            </button> 
            );
        return buttonList;
    }

    render()
    {
        return (
            <>
                <div>
                <h2>Standards time</h2>
                    {this.standardTimeButtons()}
                </div>
                <div id="custom-time">
                <h2>Custom time</h2>
                {/*Todo : Custom time form with column value selector for each input*/}
                    <form>
                        <input id="hours" type="number" min="0" max="6" defaultValue={this.state.hours}></input>
                        <input id="minutes" type="number" min="0" max="59" defaultValue={this.state.minutes}></input>
                        <input id= "seconds" type="number" min="0" max="59" defaultValue={this.state.seconds}></input>
                        <button>Validate</button>  
                    </form>                                
                </div>
            </>
        );
    }
}


SetTimer.defaultProps = {
    hours: '0',
    minutes: '10',
    seconds: '0',
            
}

export default SetTimer;