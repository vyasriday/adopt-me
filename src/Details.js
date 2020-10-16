import React, { Component } from 'react';
import { navigate } from '@reach/router';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import Modal from './Modal';
// reach router will automatically pass the id param to this component as props
class Details extends Component {
	state = {
		loading: true,
		showModal: false,
	};
	componentDidMount() {
		pet.animal(this.props.id).then(({ animal }) => {
			this.setState({
				url: animal.url,
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

	toggleModal = () => this.setState({ showModal: !this.state.showModal });
	adopt = () => navigate(this.state.url);
	render() {
		if (this.state.loading) {
			return <h1>Loading ...</h1>;
		}

		const {
			animal,
			breed,
			location,
			description,
			name,
			media,
			showModal,
		} = this.state;
		return (
			<div className='details'>
				<Carousel media={media} />
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location} `}</h2>
				<ThemeContext.Consumer>
					{/* themeHook is the value passed down from Provider in App component */}
					{(themeHook) => (
						<button
							style={{ backgroundColor: themeHook[0] }}
							onClick={this.toggleModal}
						>
							Adopt {name}
						</button>
					)}
				</ThemeContext.Consumer>
				<p>{description}</p>
				{showModal ? (
					<Modal>
						<h1>Would you like to adopt {name}</h1>
						<div className='buttons'>
							<button onClick={this.adopt}>Yes</button>
							<button>No, I am a monster</button>
						</div>
					</Modal>
				) : null}
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
