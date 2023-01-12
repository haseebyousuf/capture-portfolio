import React from "react";
// import styled
import Styled from "styled-components";
// import styles
import { About, Discreption, Image } from "../styles"; 
//import icons
import clock from "../img/clock.svg";
import diaphrafm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
const ServicesSection = () => {
    return (
        <Services>
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
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphrafm} alt="icon" />
                            <h3>diaphrafm</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>money</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
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
