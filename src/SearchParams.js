import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParmas = () => {
  /*
   * useState takes the default state as argument and returns an array which contains the
   * first and second item to be the state variable and the state updater function respectively.
   * The updater is used to update the respective state variable only.
   * const arr = useState("initial State") // ["initial State", function]
   */
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

  return (
    <div className="search-params">
      <form>
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
    </div>
  );
};

export default SearchParmas;
