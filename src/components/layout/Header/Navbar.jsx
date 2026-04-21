import React from "react";
import { MENU_ITEM } from "../../../constants/menu";

const Navbar = ({ mobileMenu }) => {
    return (
        <>
            <nav className="w-full">
                <ul
                    className={`flex gap-5 md:gap-8 ${mobileMenu ? "flex-col" : ""}`}
                >
                    {MENU_ITEM.map((item) => (
                        <li
                            className={`text-gray-300 p-2.5 hover:text-accent-dark-gold ${mobileMenu ? "hover:bg-gray-800 w-full" : ""} text-xs md:text-sm cursor-pointer font-medium uppercase`}
                            key={item.id}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
