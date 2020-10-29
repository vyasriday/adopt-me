import React, { useState, useEffect, useContext, FunctionComponent } from 'react';
import pet, { ANIMALS, Animal } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';
import { RouteComponentProps } from '@reach/router';

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
	const [location, setLocation] = useState('Seattle, WA');
	const [breeds, setBreeds] = useState([]);
	// these are custom hooks and therefore they will be fired on rerender and are not governed by useState dependency rules
	const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
	const [pets, setPets] = useState([] as Animal[]);
	// create a context, where theme is the value that ThemeConext provides and it's updater
	const [theme, setTheme] = useContext(ThemeContext);

	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal,
		});
		setPets(animals || []);
	}

	useEffect(() => {
		setBreeds([]);
		setBreed('');
		pet.breeds(animal).then(({ breeds: apiBreeds }) => {
			const breedStrings = apiBreeds.map(({ name }) => name);
			setBreeds(breedStrings);
		});
	}, [animal, setBreeds, setBreed]);
	return (
		<div className='search-params'>
			<h1>{location}</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					requestPets();
				}}
			>
				<label htmlFor='location'>
					Location
					<input
						id='location'
						value={location}
						placeholder='Location'
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				<label htmlFor='theme'>
					<select
						id='theme'
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
						onBlur={(e) => setTheme(e.target.value)}
					>
						<option value='steelblue'>SteelBlue</option>
						<option value='peru'>Peru</option>
						<option value='darkblue'>Dark Blue</option>
						<option value='orange'>Orange</option>
					</select>
				</label>
				<button style={{ backgroundColor: theme }} type='submit'>
					Submit
				</button>
			</form>
			<button onClick={() => setTheme('steelblue')}>Change Color</button>
			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;
