import React from "react";
import { MENU_ITEMS } from "../../constants/data";
import NavItem from "./NavItem";

const Navbar = ({ isMobileMenu }) => {
    return (
        <>
            <div className="w-full">
                <nav
                    className={`flex gap-5 md:gap-8 ${isMobileMenu ? "flex-col" : ""}`}
                >
                    {MENU_ITEMS.map((item) => (
                        <NavItem
                            key={item.id}
                            item={item}
                            isMobileMenu={isMobileMenu}
                        />
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Navbar;
