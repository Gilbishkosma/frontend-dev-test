import React,{Component} from 'react';


class PlayerInput extends Component{
	render(){
		return(
			 <div style={{display:'flex',width:'100%',justifyContent:'space-around',alignItems:'baseline'}}> 
      	<p style={{color:'white',margin:'6px'}}>{this.props.title}</p>
      	<input type="text" style={{borderRadius:'2px'}} value={this.props.value} onChange={(name) => this.props.onChange(name) }/>
      	</div>
		)
	}
}

export default PlayerInput

