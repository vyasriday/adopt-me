import React from 'react';
import pet from '@frontendmasters/pet';
// you can not use hooks with class components
class Details extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { animal } = await pet.animal(this.props.id);
    this.setState({
      animal: animal.type,
      location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
      description: animal.description,
      media: animal.photos,
      breed: animal.breeds.primary,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }
    const { animal, breed, location, name, description } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
