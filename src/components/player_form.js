import React, {Component} from 'react';
import Modal from './modal';
import PlayerInput from './player_input';
import { connect } from 'react-redux';
import { addPlayers } from "../store/actions";
import Button from '../components/button';

const mapStateToProps = state => {
  return { players: state.baseReducer.players };
};

const mapDispatchToProps = dispatch => {
  	return {
  	addPlayers: player_name => dispatch(addPlayers(player_name))
  }
};

class PlayerForm extends Component{
	constructor(props) {
      super(props);
      this.nameAddHandler = this.nameAddHandler.bind(this);
    }

    nameAddHandler = (name,player,previous_value) => { 
    	const new_value = name.target.value;
    	switch(player){
    		case 'player1':
    			return this.props.addPlayers({player1:new_value,player2:previous_value})
    		case 'player2':
    			return this.props.addPlayers({player1:previous_value,player2:new_value})
        default:
          return this.props.addPlayers({player1:'',player2:''})
    	}
    }

	render(){
		const { player1,player2 } = this.props.players
		return(
			<Modal>
       		<p style={{color:'white',fontSize:'15px',textAlign:'center'}}><b>Start a New Game</b></p>
        	<PlayerInput title="Player1" value={player1} onChange={(name) => this.nameAddHandler(name,'player1',player2) } />
        	<PlayerInput title="Player2" value={player2} onChange={(name) => this.nameAddHandler(name,'player2',player1)} />
        	<Button title="Start!" style={{padding:"8px 8px",alignSelf:'center',borderRadius:'5px'}} />
        	</Modal>
			)
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(PlayerForm)