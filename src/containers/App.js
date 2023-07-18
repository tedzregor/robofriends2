import React, { Component } from 'react'
import './App.css';
import SearchBox from '../components/SearchBox/SearchBox'
import CardList from '../components/CardList/CardList'
import Scroll from '../components/Scroll/Scroll'
import 'tachyons'

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
      .then(res => res.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return (
      <div className="App">
        <h1>ROBOFRIENDS V2</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={ filteredRobots }/>
        </Scroll>
      </div>
    );
  }
}

export default App;
