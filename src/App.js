import React, { Component } from 'react';

class App extends Component {
    render(){
        const helloWorld = "Seja bem vindo ao livro Road to React";

        return (
            <div>
                <h1>{helloWorld}</h1>
            </div>
        );
    }
}

export default App;