import React from 'react';
import '../styles/button.css'



export default ({title,style,onClick}) => {
	return(
		<button className="button" onClick={onClick} style={{...style}}><b>{title}</b></button>
		)
}