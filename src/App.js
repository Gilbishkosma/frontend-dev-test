import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';
import GameStartScene from './scenes/gameStartScene'

const mapStateToProps = function(state,props) {
  return {}
}

const mapDispatchToProps = dispatch => ({
  
});

class App extends Component {
  render() {
    return (
     <div className="App">
      	<GameStartScene />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
