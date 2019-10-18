import React, { useState } from "react";

// lets create our own custom hook
const useDropdown = (label, defaultState, options) => {
  // kinda like a generic dropdown
  const [state, setState] = useState(defaultState);
  // replace the spaces with nothing, makes unique id
  const id = `use-dropdown-${label.replace("", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
