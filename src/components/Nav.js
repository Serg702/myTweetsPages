import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "emotion";

const listStyles = css`
  list-style-type: none;
`;
export default function Nav() {
  return (
    <div>
      <ul className={listStyles}>
        <li>
          <NavLink to="/">All tweets</NavLink>
        </li>
        <li>
          <NavLink to="/my">My tweets</NavLink>
        </li>
        <li>
          <NavLink to="/new">New Tweet</NavLink>
        </li>
      </ul>
    </div>
  );
}
