import React, {Component} from 'react';
import logo from '../static/images/logo.png';
import Button from '../components/button';
import PlayerForm from '../components/player_form';


class GameScene extends Component{
    constructor(props) {
      super(props);
      this.state = {isModalOpen: false};
      this.handleClick = this.handleClick.bind(this); 
    }

    componentDidMount() {
    document.addEventListener('click', this.handleClick);
    }
    componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    }

    handleClick(event){
      if(this.state.isModalOpen){
        const modal = document.getElementById('modal')
        if(event.target === modal){
          this.setState({isModalOpen:false})
        }
      }
    }

    render(){
    const {isModalOpen} = this.state
    return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
        <img src={logo} alt="logo" />
        <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
          <Button title="New Game" onClick={() => this.setState({isModalOpen:true})} />
          <Button title="Credit" />
          <Button title="Exit" />
        </div>
        {
         (() => {
            if(isModalOpen){
              return <PlayerForm />
            }            
          })()
        }
        </div>
    )
  }
}

export default GameScene;