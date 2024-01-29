import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const MobileNav = () => {
  // State for menu toggle, dropdowns, and mobile menu visibility
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isQuickLinksDropdownOpen, setIsQuickLinksDropdownOpen] =
    useState(false);
    

  // Define a custom hook to handle the menu toggle state
  const useMenuToggle = () => {
    // State for menu toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle menu toggle
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return [isMenuOpen, toggleMenu];
  };

  // Handle "More" dropdown toggle
  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
    isQuickLinksDropdownOpen
      ? setIsQuickLinksDropdownOpen(!isQuickLinksDropdownOpen)
      : setIsQuickLinksDropdownOpen(isQuickLinksDropdownOpen);
  };

  // Handle "Quick Links" dropdown toggle
  const toggleQuickLinksDropdown = () => {
    setIsQuickLinksDropdownOpen(!isQuickLinksDropdownOpen);
    isMoreDropdownOpen
      ? setIsMoreDropdownOpen(!isMoreDropdownOpen)
      : setIsMoreDropdownOpen(isMoreDropdownOpen);
  };
  // Define the menu items for each dropdown menu
  const moreItems = [
    { text: "Bonds", href: "/" },
    { text: "Polls", href: "/" },
    { text: "Grand Exchange", href: "/" },
    { text: "Road Map", href: "/" },
    { text: "RuneLite", href: "/" },
    { text: "Jagex Launcher", href: "/" },
    { text: "Merchandise", href: "/" },
  ];

  const quickLinksItems = [
    { text: "Account", href: "/" },
    { text: "Redeem Code", href: "/" },
    { text: "Status", href: "/" },
    { text: "Support", href: "/" },
  ];


  return (
    <div className="w-full h-[100vh]  bg-gray-700 flex flex-col items-center  pt-4 font-Cinzel lg:hidden text-xl ">
      <ul className=" justify-around">
        <MainMenuItem text="Membership" to="/membership"/>
        <MainMenuItem text="World Map" to="/worldmap" />
        <MainMenuItem text="High Score" to="/highscore" />
        <MainMenuItem text="Forums" to="/forums" />
        <MainMenuItem text="News" to="/news" />

        <li className="group">
          <button
            className="text-yellow-500 hover:text-white"
            type="button"
            onClick={toggleMoreDropdown}
          >
            More
            <ArrowDropDownIcon style={{ color: "white" }} />
          </button>
          <ul
            className={`bg-gray-500 text-white className=" hover:text-yellow-500" p-2 space-y-2 w-[100vw] text-base ${
              isMoreDropdownOpen ? "block" : "hidden"
            }`}
          >
            <DropdownMenu
              title="More"
              items={moreItems}
              isOpen={isMoreDropdownOpen}
              onClick={toggleMoreDropdown}
            />
          </ul>
        </li>
        <li className="group">
          <button
            className=" text-yellow-500 hover:text-white w-full "
            type="button"
            onClick={toggleQuickLinksDropdown}
          >
            Quick Links
            <ArrowDropDownIcon style={{ color: "white" }} />
          </button>

          <ul
            className={`bg-gray-500 text-white p-2 space-y-2 w-[100vw] text-base ${
              isQuickLinksDropdownOpen ? "block" : "hidden"
            }`}
          >
            <DropdownMenu
              title="Quick Links"
              items={quickLinksItems}
              isOpen={isQuickLinksDropdownOpen}
              onClick={toggleQuickLinksDropdown}
            />
          </ul>
        </li>
        {/* <li className="text-white pt-1 pb-1 pl-5 pr-5 border border-slate-50 rounded-full hover:bg-yellow-500  mt-10 w-[210px] ">
              <a href={LOGIN_URL}>Login / Sign Up</a>
            </li> */}
      </ul>
    </div>
  );
};

export default MobileNav;

// Define a custom component for each main menu item

const MainMenuItem = ({ text, to, onClick }) => {
  return (
    <li>
      <Link
        className="text-yellow-500 hover:text-white"
        to={to}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};
const MenuItem = ({ text, href, onClick }) => {
  return (
    <li>
      <a className="hover:text-yellow-500" href={href} onClick={onClick}>
        {text}
      </a>
    </li>
  );
};

// Define a custom component for each dropdown menu
const DropdownMenu = ({ title, items, isOpen }) => {
  return (
    <li className="group">
      {/* <button
        className="text-yellow-500 hover:text-white w-full"
        type="button"
      >
        {title}
        <ArrowDropDownIcon style={{ color: "white" }} />
      </button> */}
      <ul
        className={`bg-gray-500 text-white p-2 space-y-2 w-[100vw] text-base ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {items.map((item) => (
          <MenuItem
            key={item.text}
            text={item.text}
            href={item.href}
            onClick={item.onClick}
          />
        ))}
      </ul>
    </li>
  );
};
