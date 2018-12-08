import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

import './App.css'


class App extends React.Component {
   state = {
      robots: [],
      searchfield: ''
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({ robots: users }))
   }

   onSearchChange = (e) => {
      this.setState({ searchfield: e.target.value })
   }

   render() {
      const filteredRobots = this.state.robots.filter(robot => {
         return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })

      return (this.state.robots.length === 0) ? 
         ( <h1>Loading...</h1>) :
         ( <div className='tc'>
               <h1 className='f1'>RobotFriends</h1>
               <SearchBox searchChange={this.onSearchChange} />
               <Scroll>
                  <CardList robots={filteredRobots} />
               </Scroll>
            </div> )
   }
}

export default App;