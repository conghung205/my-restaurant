import React from "react";
import heroImg from "../../assets/images/screen.png";
import Button from "../common/Button";
import { FaAnglesDown } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex justify-center text-center items-center">
            {/* image */}
            <img
                className="absolute inset-0 w-full h-full object-cover object-bottom -z-10"
                src={heroImg}
                alt="hero img"
            />
            {/* overlay */}
            <div className="absolute inset-0 -z-10 bg-black/70"></div>

            {/* content */}
            <div className="w-full px-5 md:w-1/2 md:px-0 text-center">
                <p className="text-third mb-1 tracking-widest uppercase text-xs md:text-sm">
                    trải nghiệm ẩm thực cao cấp
                </p>
                <h1 className="text-5xl md:text-7xl leading-[1.2] mb-6 text-txt-title font-extrabold">
                    NHÀ HÀNG LẨU NƯỚNG
                    <span className="text-secondary"> SIZZLE</span>
                </h1>
                <p className="text-fourth text-lg">
                    Hương Vị Tuyệt Hảo - Trải Nghiệm Ấm Cúng
                </p>

                <div className="my-10 flex items-center font-semibold justify-center gap-4">
                    <Button
                        text={"Đặt bàn ngay"}
                        className="bg-sizzle-gradient text-xs md:text-lg hover:shadow-lg shadow-accent-gold/50 text-gray-800"
                    />
                    <Button
                        text={"xem thực đơn"}
                        className="bg-transparent text-xs md:text-lg text-txt-title hover:bg-gray-200/20 border border-gray-500"
                    />
                </div>

                <div className="text-third mt-30 flex flex-col justify-center items-center tracking-widest uppercase text-xs md:text-sm">
                    <FaAnglesDown />
                    <p className="mt-3">Cuộn để khám phá</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
