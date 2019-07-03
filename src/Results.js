import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
  if (pets.length === 0) {
    return (
      <div className="search">
        <h1>No Pets Found!!!</h1>
      </div>
    );
  }
  return (
    <div className="search">
      {pets.map(pet => (
        <Pet
          id={pet.id}
          animal={pet.type}
          key={pet.id}
          name={pet.name}
          breed={pet.breeds.primary}
          media={pet.photos}
          location={`id=${pet.id} ${pet.contact.address.city} ${pet.contact.address.state}`}
        />
      ))}
    </div>
  );
};

export default Results;
