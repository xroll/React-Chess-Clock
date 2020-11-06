import React from 'react';
import ReactDOM, { render } from 'react-dom';

class App extends React.Component {
    
    render(){
        return (
            <>
               <h1>Page</h1>
            </>
        );
    }
}

ReactDOM.render(<App/>,
    document.querySelector('#root')
    );