import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  };


  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index
    })
  }

   // a special method which must be static and gives us a new state from the props
  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];
    if (media.length) {
      photos = media.map(photo => photo.large);
    }
    return photos;
  }
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              alt=""
              data-index={index}
              src={photo}
              className={
                index === active ? 'active' : 'img[src={photos.active}]'
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
