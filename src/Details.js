import React, { Component } from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
// reach router will automatically pass the id param to this component as props
class Details extends Component {
	state = {
		loading: true,
	};
	componentDidMount() {
		pet.animal(this.props.id).then(({ animal }) => {
			this.setState({
				name: animal.name,
				animal: animal.type,
				location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
				description: animal.description,
				media: animal.photos,
				breed: animal.breeds.primary,
				loading: false,
			});
		});
	}

	render() {
		if (this.state.loading) {
			return <h1>Loading ...</h1>;
		}

		const { animal, breed, location, description, name, media } = this.state;
		return (
			<div className='details'>
				<Carousel media={media} />
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location} `}</h2>
				<button>Adopt {name}</button>
				<p>{description}</p>
			</div>
		);
	}
}

// returning a HOC instead of wrapping the Details UI in ErrorBoundary
export default function DisplayWithErrorBoundary(props) {
	return (
		// Details will get all the props as react will spread the props object and pass them as props to the component
		<ErrorBoundary>
			{/* same as <Details props.key = props.value ... sn on />*/}
			<Details {...props} />
		</ErrorBoundary>
	);
}
