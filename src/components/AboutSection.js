import React from "react";
import home1 from "../img/home1.png";
// import styled
import Styled from "styled-components";

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

const About = Styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const Discreption = Styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight:lighter;
    }
`;

const Image = Styled.div`
    flex:1;
    overflow: hidden;
    img {
        width :100%;
        height :80vh;
        object-fit: cover;
    }
`;

const Hide = Styled.div`
    overflow:hidden;
`;
export default AboutSection;
