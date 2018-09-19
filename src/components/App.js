import React from 'react';
import Post from './Post';
import Joke from './Joke';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Joke Project! - Me da 10 de Nac rindo :D</h1>
                <Joke />
                <Post />
            </div>
        );
    }
}