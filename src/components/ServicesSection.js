import React, { useEffect } from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

//Import Images
import home2 from "../img/home2.png";

import { About, Discreption, Image } from "../styles";
import Styled from "styled-components";
// import { srcollReveal } from "../animation";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ServicesSection = () => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (view) {
            controls.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.5,
                },
            });
        }
        if (!view) {
            controls.start({
                opacity: 0,
                scale: 1.2,
                transition:{
                    duration:0.5
                }
            });
        }
    }, [view, controls]);

    return (
        <Services ref={element} animate={controls}>
            <Discreption>
                <h2>
                    High <span> quality</span> services.
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>diaphrafm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Discreption>
            <Image>
                <img src={home2} alt="icon" />
            </Image>
        </Services>
    );
};

const Services = Styled(About)`
    overflow: hidden;
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 1rem 0rem 3rem 0rem;
    }
`;

const Cards = Styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
  }
`;

const Card = Styled.div`
    flex-basis: 15rem;
    width: 50%;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;
export default ServicesSection;
