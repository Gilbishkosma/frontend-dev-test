import React from 'react';
import '../styles/modal.css'




export default (props) => {
	return(
		<div id="modal">
		<div className="modal-content">
			{props.children}
		</div>
		</div>
		)
}