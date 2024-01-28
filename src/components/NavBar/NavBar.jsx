import logo from "../../images/logo.png";
import React, { useState } from "react";
import close from "../../images/close.png";
import menuImg from "../../images/menu.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SubMenu from "../SubMenu";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

// Define the login URL as a constant
export const LOGIN_URL =
  "https://account.jagex.com/en-GB/assisted-login?login_challenge=ef514e221742482e828b570a93923ce7#_ga=2.202421457.1737877851.1706239190-987274459.1704939514";

// Define the items for the navigation list as a constant
const items = [
  { text: "Bonds", link: "/" },
  { text: "Polls", link: "/" },
  { text: "Grand Exchange", link: "/" },
  { text: "Road Map", link: "/" },
  { text: "RuneLite", link: "/" },
  { text: "Jagex Launcher", link: "/" },
  { text: "Merchandise", link: "/" },
];

// Define a custom hook to handle the menu toggle state
const useMenuToggle = () => {
  // State for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Return the state and the handler
  return [isMenuOpen, toggleMenu];
};

// Define a reusable button component
const Button = ({ label, to }) => {
  // Use the useNavigate hook to navigate to the given path
  const navigate = useNavigate();

  // Define a handler function to call the navigate function
  const handleClick = () => {
    navigate(to);
  };

  // Return the button element with the given label and handler
  return (
    <button
      className="text-white hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500 font-semibold"
      type="button"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

const ListItem = ({ text, link }) => (
  <li className="pl-2 hover:bg-gray-500">
    <a href={link}>{text}</a>
  </li>
);

const NavigationList = ({ items }) => (
  <ul className="flex flex-col space-y-2">
    {items.map((item, index) => (
      <ListItem key={index} {...item} />
    ))}
  </ul>
);

const NavBar = () => {
  // Use the custom hook to get the menu toggle state and handler
  const [isMenuOpen, toggleMenu] = useMenuToggle();


  return (
    <nav className="bg-brick fixed z-50 w-full h-[60px] md:h-[90px] lg:h-[75px]">
      {/* SubMenu component (assuming it's a separate component) */}
      <SubMenu />

      {/* Mobile menu toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 pb-1">
        <img className="w-[100px]" src={logo} alt="logo" />
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img className="w-[20px]" src={close} alt="" />
          ) : (
            <img className="w-[20px]" src={menuImg} alt="" />
          )}
        </button>
      </div>

      {/* Desktop menu links */}
      <ul className="items-center justify-around hidden lg:flex space-x-4 font-Cinzel font-bold">
        <li className="group">
          <Button label="Membership" to="/membership" />
        </li>
        <li className="group">
          <Button label="World Map" to="/worldmap" />
        </li>
        <li className="group">
          <Button label="High Score" to="/highscore" />
        </li>
        <img className="absolute mt-12" src={logo} alt="logo" />
        <li className="group">
          <Button label="Forums" to="/forums" />
        </li>
        <li className="relative group">
          <Button label="More" />
          <ArrowDropDownIcon style={{ color: "white" }} />
          <ul className="absolute hidden bg-gray-700 text-white space-y-2 w-[150px] text-justify group-hover:block text-sm p-1">
            <NavigationList items={items} />
          </ul>
        </li>
        <li className="text-white pt-1 pb-1 pl-5 pr-5 border border-slate-50 rounded-full hover:bg-yellow-500 ">
          <a href={LOGIN_URL}>Login / Sign Up</a>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileNav />}
    </nav>
  );
};

export default NavBar;
