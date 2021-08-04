/**
 * Navbar (short for navigation bar) sits at the top of the page, allowing users to
 * see the brand logo and access the various pages easily.
 *
 * Requirement for this challenge:
 * -  To include the Stan logo at the top of the page.
 * -  Have a section for Menu Items
 *
 * Parameters:
 *    @param {string[]} menuItems list of items to display on the navbar
 */

import React from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

export interface NavbarProps {
  menuItems: Array<string>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { menuItems } = props;

  return (
    <div data-testid="navigation" className="navigation">
      <img src={logo} alt="logo" data-testid="logo" className="logo" />
      <div className="menu-items">
        {menuItems.map((item, i) => (
          <button data-testid={`item-${item}`} key={`item-${item}-${i}`}>
            <h4>{item}</h4>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
