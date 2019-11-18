import React, { Component } from 'react';

import CardList from './components/cardList/CardList';
import SearchBox from './components/searchBox/SearchBox';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  filterMonsters = (e) => {
    const searchField = e.target.value;
    this.setState({
      searchField: searchField
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
    return (
      <div className="App">
        <h1 className="monster-title">Monster School</h1>
        <SearchBox 
          placeholder="Search Monster By Name" 
          handleChange={this.filterMonsters} 
        />
        <CardList 
          monsters={filteredMonster} 
        />
      </div>
    );
  }
}

export default App;
