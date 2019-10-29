import { createContext } from "react";

// this is a hook ["green", () => {}]. it has a state and an updater
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
