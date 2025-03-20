/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track which dropdown is open

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (menu: string): void => {
    setOpenDropdown(openDropdown === menu ? null : menu); // Toggle dropdown visibility
  };

  const navigateToPage = (page: string): void => {
    // Simulate navigation to a new page
    console.log(`Navigating to: ${page}`);
    setIsMenuOpen(false); // Close mobile menu after selection
    setOpenDropdown(null); // Close any open dropdowns
  };

  // Menu items structure for consistency between desktop and mobile
  const menuItems = [
    {
      name: "Audience",
      id: "target",
      subItems: [
        { name: "Social media users", path: "Social media users" },
        {
          name: "Influencers and content creators",
          path: "Influencers and content creators",
        },
        { name: "Small business owners", path: "Small business owners" },
        { name: "Event planners", path: "Event planners" },
        {
          name: "Politicians and public figures",
          path: "Politicians and public figures",
        },
      ],
    },
    {
      name: "Pricing",
      id: "pricing",
      subItems: [
        { name: "Basic", path: "Basic" },
        { name: "Pro", path: "Pro" },
        { name: "Enterprise", path: "Enterprise" },
      ],
    },
    {
      name: "Contact",
      id: "contact",
      subItems: [
        { name: "Email", path: "Email" },
        { name: "Phone", path: "Phone" },
        { name: "Social Media", path: "Social Media" },
      ],
    },
  ];

  return (
    <nav className="bg-transparent shadow-lg py-4">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <img
            src="/Logo.png"
            alt="Company Logo"
            className="h-14 object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => handleDropdownToggle(item.id)}
                className="hover:text-blue-600 transition duration-200"
              >
                {item.name}
              </button>
              {openDropdown === item.id && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-transparent shadow-md rounded-md z-10">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => navigateToPage(subItem.path)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-md mt-2 pb-2 overflow-hidden">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleDropdownToggle(item.id)}
                className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left font-medium"
              >
                {item.name}
                <span className="float-right">
                  {openDropdown === item.id ? "▲" : "▼"}
                </span>
              </button>
              {openDropdown === item.id && (
                <div className="pl-4 bg-gray-50">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => navigateToPage(subItem.path)}
                      className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
