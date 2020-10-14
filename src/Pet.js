import React from 'react';

export default function Pet(props) {
	const { name, animal, breed } = props;

	return (
		<div>
			<h1>{name}</h1>
			<h2>{animal}</h2>
			<h2>{breed}</h2>
		</div>
	);
}
