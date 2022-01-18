import React from 'react';
import './App.css';
import Player from './components/player';
import Sidebar from './components/sidebar';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Sidebar />
          <Player />
        </Provider>
      </div>
    );
  }
}

export default App;
