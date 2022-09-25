import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import Searchbox from '../components/searchbox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }

    }
}

export default App;