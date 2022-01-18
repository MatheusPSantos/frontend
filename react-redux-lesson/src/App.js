import React from 'react';
import './App.css';
import Player from './components/player';
import Sidebar from './components/sidebar';
import { categories } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [...categories]
    };
  }

  render() {
    return (
      <div className="App">
        <Sidebar categories={this.state.categories} />
        <Player />
      </div>
    );
  }
}

export default App;
