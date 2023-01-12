import React from "react";
import home1 from "../img/home1.png";
// import styled
// import Styled from "styled-components";
import { About, Discreption, Hide, Image } from "../styles";

const AboutSection = () => {
    return (
        <About>
            <Discreption>
                <div className="title">
                    <Hide>
                        <h2>We work to Make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            Your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
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
