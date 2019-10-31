import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const color = "pink";

// returning an object

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${color};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span role="img" aria-label="logo">
        🤬
      </span>
    </header>
  );
};

// returning just an object

// const NavBar = () => (
//   <header
//     css={css`
//       background-color: ${color};
//       padding: 15px;
//     `}
//   >
//     <Link to="/">Adopt Me!</Link>
//     <span role="img" aria-label="logo">
//       🤬
//     </span>
//   </header>
// );
export default NavBar;
