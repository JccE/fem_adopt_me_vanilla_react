import React, { useState } from "react";
// parcel will get this from npm for you...
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // normal way
  // const location = "Seattle, WA";

  // using useState
  // Seattle is the default state, the "first" state
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog");
  // const [animal, setAnimal] = useState("dog");
  // const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  // console.log("state of location", location);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          {/*any time a change happens inside the input, it will call setLocation on whatevers inside of the input */}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        {/* <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breedString => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
          </select>
        </label>*/}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
