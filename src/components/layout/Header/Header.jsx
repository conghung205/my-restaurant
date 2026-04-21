import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BsCartCheck } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Button from "../../common/Button";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleOpenMenuMobile = () => {
        setIsMobile(true);
    };
    const handleCloseMenuMobile = () => {
        setIsMobile(false);
    };

    // khóa cuộn khi click open menu mobile
    useEffect(() => {
        if (isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        // cleanup function
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobile]);

    return (
        <div className="relative">
            <header className="fixed top-0 left-0 right-0 z-10 shadow-xl/30 bg-bg-main px-5 md:px-0 py-5 flex items-start">
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
                className={`fixed inset-0 z-[100] ${isMobile ? "visible" : "invisible"}`}
            >
                {/* overlay */}
                <div
                    className={`${isMobile ? "visible opacity-100" : ""} backdrop-blur-xs duration-300 transition-all absolute z-10 inset-0 invisible opacity-0 bg-bg-overlay`}
                ></div>
                <div
                    className={`absolute ${isMobile ? "translate-0" : "translate-x-full"} duration-300 transition-all flex inset-0 justify-end z-100`}
                >
                    <div className="relative p-5 w-1/2 text-center bg-bg-main h-2/3 rounded shadow-xl">
                        {/* close */}
                        <div
                            className="absolute top-2.5 right-2.5"
                            onClick={handleCloseMenuMobile}
                        >
                            <IoMdClose className="text-xl text-gray-400 cursor-pointer hover:text-gray-100" />
                        </div>

                        <div className="flex mt-6 flex-col items-center mb-2">
                            <Navbar mobileMenu={true} />
                        </div>

                        <div className="flex flex-col items-center gap-4 pt-2 border-t border-gray-100">
                            <p className="text-txt-title flex gap-2 items-center justify-center hover:text-accent-gold hover:bg-gray-800 w-full p-2.5 text-xs uppercase">
                                Giỏ hàng
                                <BsCartCheck className="text-txt-title hover:text-accent-gold text-lg cursor-pointer font-medium" />
                            </p>
                            <Button
                                className="bg-primary text-txt-title text-xs md:text-sm w-full rounded"
                                text={"Đặt bàn ngay"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
