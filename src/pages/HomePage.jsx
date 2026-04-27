import React from "react";
import Header from "../layout/Header/Header";
import HeroSection from "../components/components/HeroSection";
import Featured from "../components/components/Featured";
import Ambience from "../components/components/Ambience";
import Layout from "../layout/MainLayout";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <Featured />
            <Ambience />
        </div>
    );
};

export default HomePage;
