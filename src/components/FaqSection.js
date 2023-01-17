import React, { useEffect } from "react";
import Styled from "styled-components";
import { AnimateSharedLayout, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import styles
import { About } from "../styles";
//import toggle for faq
import Toggle from "./Toggle";

const FaqSection = () => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });
    console.log(view);

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
                transition: {
                    duration: 0.5,
                },
            });
        }
    }, [view, controls]);
    return (
        <Faq ref={element} animate={controls}>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti, reprehenderit?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti, reprehenderit?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Methods?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti, reprehenderit?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What Products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti, reprehenderit?
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = Styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;
export default FaqSection;
