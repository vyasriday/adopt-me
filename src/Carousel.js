import React from 'react';

class Carousel extends React.Component {
	state = {
		photos: [],
		active: 0,
	};

	static getDerivedStateFromProps(props) {
		const photos = props.media.map((photo) => photo.large);
		return {
			photos,
		};
	}

	handleIndexClick = (event) => {
		// all data-attributes of an element are available on it as element.dataset.attribute.
		const index = +event.target.dataset.index;
		this.setState({
			active: index,
		});
	};

	render() {
		const { photos, active } = this.state;

		return (
			<div className='carousel'>
				<img src={photos[active]} alt='animal' />
				<div className='carousel-smaller'>
					{photos.map((photo, index) => (
						// eslint-disable-next-line
						<img
							key={photo}
							onClick={this.handleIndexClick}
							data-index={index}
							src={photo}
							className={index === active ? 'active' : ''}
							alt='animal'
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
