import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';
import logo from './static/images/logo.png';
import Button from './components/button'


const mapStateToProps = function(state,props) {
  return {}
}

const mapDispatchToProps = dispatch => ({
  
});

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
        <img src={logo} alt="logo" />
        <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
        <Button title="New Game" />
        <Button title="Credit" />
        <Button title="Exit" />
        </div>
      	</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
