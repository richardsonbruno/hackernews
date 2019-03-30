import React, { Component } from 'react';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        title: 'React Native',
        url: 'https://facebook.github.io/react-native',
        author: 'Jordan Walke',
        num_comments: 10,
        points: 2,
        objectID: 1
    },
];

class App extends Component {

    constructor(props){
        super(props);
        this.state = { list, searchTerm: '' };
    }

    onDismiss = id => {
        const updateList = this.state.list.filter(item => item.objectID !== id);
        this.setState({ list: updateList });
    }

    onSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render(){
        return (
            <div className='App'>

                <form>
                    <input 
                        type="text"
                        onChange={this.onSearchChange} />
                </form>

                {this.state.list.map((item, key) => 
                    <div key={key}>
                        <span>
                            <a href={item.url} title={item.title}>
                                {item.title}
                            </a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                            <button 
                                type="Dismiss"
                                onClick={ () => this.onDismiss(item.objectID) }>
                                Dismiss
                            </button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default App;