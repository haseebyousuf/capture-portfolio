import React from "react";
//import page components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import ScrollTop from "../components/ScrollTop";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    );
};

export default AboutUs;
