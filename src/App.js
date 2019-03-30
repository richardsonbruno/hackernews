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

    render(){
        return (
            <div className='App'>
                {list.map(function(item, key){
                    return (
                        <div key={key}>
                            <span>
                                <a href={item.url} title={item.title}>
                                    {item.title}
                                </a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;