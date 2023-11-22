import React from 'react';
function Programers(props) {
	return (
		<div className={props.company == 'Company Name: Tuwaiq' ? 'purple' : 'grey'}>
			<p>{props.proName}</p>
			<p>{props.Languages}</p>
			<p>{props.year}</p>
			<p>{props.company}</p>
		</div>
	);
}

export default Programers;
