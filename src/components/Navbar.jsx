import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils.js";
import { Link } from "react-router-dom";

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link to={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/courses">All Courses</HoveredLink>
            <HoveredLink to="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink to="/courses">Advanced Composition</HoveredLink>
            <HoveredLink to="/courses">Songwriting</HoveredLink>
            <HoveredLink to="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link to={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar
