import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: {},
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    jokes: json,
                })
            })
    }

    render() {
        var { isLoaded, jokes } = this.state;

        if(!isLoaded) {
            return <div>Carregando...</div>;
        }else{
            console.log(this.state)
            return (
                <div>
                    <li>
                        {this.state.jokes.value}
                    </li>
                </div>
            );
        }
    }
}