import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
// import images

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="theracer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    );
};

const Work = Styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 8rem;
    h2{
        padding: 1rem 0rem;
    }
`;
const Movie = Styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.4rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width:100%;
        height: 70vh;
        object-fit: cover;
    }
`;
export default OurWork;
