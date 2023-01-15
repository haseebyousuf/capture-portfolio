import React from "react";
import home1 from "../img/home1.png";
import { About, Discreption, Hide, Image } from "../styles";

// FRAMER MOTION
import { motion } from "framer-motion";
import { titleAnimation } from "../animation";
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
                <p>
                    Contact us for any photography ideas that you have. We have
                    professionals with skills
                </p>
                <button>contact us</button>
            </Discreption>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    );
};


export default AboutSection;
