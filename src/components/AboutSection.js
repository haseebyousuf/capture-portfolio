import React from "react";
import home1 from "../img/home1.png";
import { About, Discreption, Hide, Image } from "../styles";

// FRAMER MOTION
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnim } from "../animation";

//WAVE SVG

import Wave from "./Wave";
const AboutSection = () => {
    return (
        <About>
            <Discreption>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            We work to Make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            Your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography ideas that you have. We have
                    professionals with skills
                </motion.p>
                <motion.button variants={fade}>contact us</motion.button>
            </Discreption>
            <Image>
                <motion.img
                    variants={photoAnim}
                    src={home1}
                    alt="guy with a camera"
                />
            </Image>
            <Wave />
        </About>
    );
};


export default AboutSection;
