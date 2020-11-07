import React from 'react';
import './step.css';
import SetTimer from './SetTimer';
import Timer from './Timer';

class Step extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            step: props.step,
            timer : "",
             };   
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    //callbackfunction SetTimer : data
    setTimerCallback = (setTimerTime) => {
        this.setState({timer: setTimerTime, step:'timer'});
    };

    setStep(e, step){
        this.setState({step: step});
    }

    stepContent(){
        switch(this.state.step){
            case 'main-menu':
                return this.mainMenu();
                break;
            case 'instructions':
                return this.instructions();
                break;
            case 'set-timer':
                return this.setTimer();
                break;
            case 'timer':
                return this.Timer();
                break;
            default:
                return null;            
        }
    }

    mainMenu(){
        return (
            <>
                <button onClick={(e) => this.setStep(e, 'set-timer')}>Set the timer</button>
                <button onClick={(e) => this.setStep(e, 'instructions')}>instructions</button>
            </>
        );
    }

    instructions(){
        return (
            <>
                Show instructions
                <button onClick={(e) => this.setStep(e, 'main-menu')}>Return to main menu</button>
            </>
        );
    }

    setTimer(){
        return (
            <>
                <SetTimer setTimerData={this.setTimerCallback}/>
                <button onClick={(e) => this.setStep(e, 'main-menu')}>Return to main menu</button>
            </>
        );
    }

    Timer(){
        return (
            <>
                <Timer initialTime={this.state.timer}/>
                <button onClick={(e) => this.setStep(e, 'main-menu')}>Return to main menu</button>
            </>
        );
    }

    render()
    {
        return (
            <div className="step">
                {this.stepContent()}
            </div>
        );
    }
}

export default Step;