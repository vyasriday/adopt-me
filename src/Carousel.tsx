import React from 'react';
import { Photo } from '@frontendmasters/pet';

interface IProps {
	media: Photo[],

}

interface IState {
	active: number,
	photos: string[]
}

class Carousel extends React.Component<IProps, IState> {
	public state = {
		photos: [],
		active: 0,
	};

	public static getDerivedStateFromProps(props: IProps) {
		const photos = props.media.map((photo: Photo) => photo.large);
		return {
			photos,
		};
	}
	// event is of type React.MouseEvent that takes in an HTMLElement and that's how we write it.
	handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
		if(!(event.target instanceof HTMLElement)) return
		// all data-attributes of an element are available on it as element.dataset.attribute.
		if (event.target.dataset.index) {
			this.setState({
				active: +event.target.dataset.index,
			});
		}
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
