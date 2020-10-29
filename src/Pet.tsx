import { Link } from '@reach/router';
import React, { FunctionComponent } from 'react';
import {Photo} from '@frontendmasters/pet'
interface IProps  {
	name: string,
	animal: string,
	media: Photo[],
	location: string,
	id: string,
	breed: string
			
}

const Pet: FunctionComponent<IProps> = (props) => {
	const { name, animal, media, location, id, breed } = props;
	let hero = 'http://placecorgi.com/300/300';

	if (media.length) {
		hero = media[0].small;
	}

	return (
		<Link to={`/details/${id}`} className='pet'>
			<div className='image-container'>
				<img src={hero} alt={name} />
			</div>
			<div className='info'>
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</Link>
	);
}

export default Pet;
