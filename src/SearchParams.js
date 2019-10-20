import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  // for clarification, breeds is never used in useEffect, therefor it is not listed as a dependency
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // with useEffect, you have to declare your dependencies
  // because useEffect will rerun with every change
  useEffect(() => {
    // clear out breeds already in there
    setBreeds([]);
    setBreed("");

    // get info from API
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      // get only the object names
      // const breedStrings = breeds.map(({ breedObj }) => breedObj.name);
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
      // check for error
    }, console.error);
    // have to add these dependencies. read this as, if any
    // one of these change, then rerun this effect, otherwise,
    // dont run it again
    // if location changes, it wont rerun because its not listed
  }, [animal, setBreed, setBreeds]);

  // test
  // useEffect(() => {
  //   // if the call is success, then console.log, else console.error
  //   pet.breeds("dog").then(console.log, console.error);
  // });

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
