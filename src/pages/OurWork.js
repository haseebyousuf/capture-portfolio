import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
// import images

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//animations
import { motion } from "framer-motion";
import {
    pageAnimation,
    fade,
    photoAnim,
    lineAnim,
    sliderContainer,
    slider,
} from "../animation";

const OurWork = () => {
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img
                            variants={photoAnim}
                            src={athlete}
                            alt="athlete"
                        />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="theracer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    );
};

const Work = Styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 8rem;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const Movie = Styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.4rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width:100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = Styled.div`
    overflow: hidden;
`;

//frames
const Frame1 = Styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2
`;

const Frame2 = Styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = Styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = Styled(Frame1)`
    background: #8effa0;
`;


export default OurWork;
