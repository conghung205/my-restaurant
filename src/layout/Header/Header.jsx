import React, { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Button from "../../components/common/Button";
import Navbar from "./Navbar";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleOpenMenuMobile = () => {
        setIsMobile(true);
    };
    const handleCloseMenuMobile = () => {
        setIsMobile(false);
    };

    return (
        <div className="relative">
            <header className="shadow-xl/30 bg-bg-main px-6 md:px-0 py-5 flex items-start">
                <div className="container mx-auto w-7xl flex justify-between items-center">
                    {/* logo */}
                    <h2 className="text-2xl md:text-3xl text-shadow-lg text-shadow-orange-800 font-bold text-txt-title cursor-pointer italic">
                        sizzle
                    </h2>
                    <div className="hidden md:block">
                        <Navbar />
                    </div>

                    <div className="hidden md:flex items-center gap-3.5 md:gap-5">
                        <BsCartCheck className="text-txt-title hover:text-accent-dark-gold text-xl cursor-pointer font-medium" />
                        <Button
                            className="bg-primary text-txt-title text-xs md:text-sm rounded"
                            text={"Đặt bàn ngay"}
                        />
                    </div>
                    {/* icon menu */}
                    <div
                        className="md:hidden cursor-pointer"
                        onClick={handleOpenMenuMobile}
                    >
                        <IoMenu className="text-txt-title hover:opacity-90 text-xl" />
                    </div>
                </div>
            </header>

            {/* menu mobile */}
            <div
                className={`${isMobile ? "block" : "hidden"} fixed inset-0 z-[100]`}
            >
                {/* overlay */}
                <div
                    onClick={handleCloseMenuMobile}
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                        isMobile ? "opacity-100" : "opacity-0"
                    }`}
                ></div>

                {/* sidebar */}
                <div
                    className={`absolute right-0 top-0 h-full w-2/3 bg-bg-main shadow-xl transform transition-transform duration-300 ${
                        isMobile ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* close */}
                    <div
                        className="absolute top-3 rounded-full left-3"
                        onClick={handleCloseMenuMobile}
                    >
                        <IoMdClose className="text-xl text-gray-400 cursor-pointer hover:text-white" />
                    </div>

                    {/* navbar */}
                    <div className="mt-14 px-4">
                        <Navbar isMobileMenu={true} />
                    </div>

                    {/* footer */}
                    <div className="mt-6 px-4 border-t border-gray-700 pt-4 flex flex-col gap-4">
                        <p className="text-white flex gap-2 items-center hover:text-accent-dark-gold cursor-pointer">
                            Giỏ hàng
                            <BsCartCheck />
                        </p>

                        <Button
                            className="bg-primary text-white text-sm w-full rounded"
                            text="Đặt bàn ngay"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
