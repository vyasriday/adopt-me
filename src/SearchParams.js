import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';

const SearchParmas = () => {
  /*
   * useState takes the default state as argument and returns an array which contains the
   * first and second item to be the state variable and the state updater function respectively.
   * The updater is used to update the respective state variable only.
   * const arr = useState("initial State") // ["initial State", function]
   */
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  /*
   * useEffect is a hook that is used in place of component lifecycle methods. It takes a callback and
   * runs the callback everytime after the render has completed.
   * Since useEffect runs everytime after render we can limit it to run only when a couple of things that useEffect
   * depends on change. This is called effective dependencies. Here it depends on animal technically because whenever
   * animal changes we want it to update the breeds dropdown. We also need to pass to it the setBreeds and setBreed.
   * The dependecies are passed in an array as the second argument.
   * If the dependency array is empty then the useEffect will run only once as there is nothing it depends on.
   * If no dependency arrays is passed the useEffect will run infinitely.
   */
  useEffect(() => {
    setBreeds([]);
    setBreed('');
    if (animal === 'All') {
      return;
    }
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    });
    /**
     * This is cool, the .then will feed the success result to console.log and if there is any error
     * it will pass it to console.error. No need to write arrow function just for logging response
     * pet.breeds(animal).then(console.log, console.error);
     */
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={event => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParmas;
