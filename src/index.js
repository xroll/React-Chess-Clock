import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./img/white-logo.png"
import githubLogo from "./img/GitHub-Mark-Light-32px.png"
import Step from "./Step";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            step: 'main-menu',
             };
      }

    render(){
        return (
            <>
               <header> 
                    <img id="logo" src={logo} alt="chess clock logo"/>
                </header>

                <main>
                    <Step
                        step={this.state.step}
                    />            
                </main>
                
                <footer>
                    <a href="#"><img src={githubLogo} alt="github logo"/></a>
                    <p>xroll - 2020</p>                
                </footer> 
            </>
        );
    }
}

ReactDOM.render(<App/>,
    document.querySelector('#root')
    );