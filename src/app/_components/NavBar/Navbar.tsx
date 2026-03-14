import React from "react";
import NavLink from "./NavLink";
import { NavItem } from "./NavItem";
import avatar from "@images/b1.jpg";

const Navbar = () => {
  const [activeId, setActiveId] = React.useState("about");

  return (
    <div className="w-full flex flex-col items-center justify-center col-span-3 bg-[#FDFCF8] ">
      <div className="overflow-hidden h-120 w-full  aspect-square">
        <img
          src={avatar.src}
          alt="avatar"
          className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
      </div>

      <div className="w-full h-full flex flex-col ">
        <ul className="w-full h-full flex flex-col font-bold relative">
          {NavItem.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              isActive={activeId === item.id}
              onClick={() => setActiveId(item.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
