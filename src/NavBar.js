import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "/colors";

const color = "pink";

// from the current state, to 360deg later
const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;
// returning an function

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.light};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 0.1s ${spin} linear infinite;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
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
