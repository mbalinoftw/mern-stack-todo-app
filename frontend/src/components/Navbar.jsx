import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePostAdd } from "react-icons/md";

export default function Navbar() {
  const navbarItems = [
    {
      url: "/",
      label: "Add",
      icon: <MdOutlinePostAdd />,
    },
  ];
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto p-4">
        <Link to="/">Todo App</Link>
        <div className="">
          {navbarItems.map((i) => (
            <Link key={i.label} className="px-4 py-1.5 flex items-center gap-1 rounded-full hover:bg-gray-300">
              {i.icon}
              <span className="text-sm">{i.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
