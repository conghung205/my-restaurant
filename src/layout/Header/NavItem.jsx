import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const NavItem = ({ item, isMobileMenu }) => {
    return (
        <NavLink
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
                clsx(
                    "md:py-1 md:px-2 py-2.5 leading-[1.2] px-4 lg:py-2 lg:px-2.5 text-xs md:text-xs lg:text-sm cursor-pointer font-medium uppercase",
                    {
                        "bg-accent-dark-gold rounded text-txt-title": isActive,
                        "text-gray-400 hover:text-accent-dark-gold": !isActive,
                        "hover:bg-gray-800 w-full": isMobileMenu && !isActive,
                    },
                )
            }
            key={item.id}
        >
            {item.title}
        </NavLink>
    );
};

export default NavItem;
