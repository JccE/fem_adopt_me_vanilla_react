import React, { useState } from "react";

const SearchParams = () => {
  // normal way
  // const location = "Seattle, WA";

  // using useState
  // Seattle is the default state, the "first" state
  const [location, setLocation] = useState("Seattle, WA");

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
