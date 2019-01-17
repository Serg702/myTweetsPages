import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "emotion";

const listStyles = css`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

const linkStyles = css`
  text-decoration: none;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  background-color: #3f51b5;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 0 10px;
  :hover {
    opacity: 0.7;
  }
`;
export default function Nav() {
  return (
    <div>
      <ul className={listStyles}>
        <li>
          <NavLink to="/" className={linkStyles}>
            All tweets
          </NavLink>
        </li>
        <li>
          <NavLink to="/my" className={linkStyles}>
            My tweets
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" className={linkStyles}>
            New Tweet
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
