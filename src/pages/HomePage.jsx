import React from "react";
import Header from "../components/layout/Header/Header";
import HeroSection from "../components/components/HeroSection";
import Featured from "../components/components/Featured";
import Ambience from "../components/components/Ambience";
import Layout from "../components/layout/Layout";

const HomePage = () => {
    return (
        <div>
            <Layout>
                <HeroSection />
                <Featured />
                <Ambience />
            </Layout>
        </div>
    );
};

export default HomePage;
