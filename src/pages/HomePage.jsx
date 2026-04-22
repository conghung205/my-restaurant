import React from "react";
import Header from "../components/layout/Header/Header";
import HeroSection from "../components/components/HeroSection";
import Featured from "../components/components/Featured";

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Featured />
        </div>
    );
};

export default HomePage;
