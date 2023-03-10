import Styled from "styled-components";
import { motion } from "framer-motion";
export const About = Styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 8rem;
    color: white;
    @media (max-width: 1300px) {
        overflow-x: hidden;
        display: block;
        padding: 2rem 2rem;
        text-align: center;
  }
`;

export const Discreption = Styled.div`
    flex: 1;
    z-index:2;
    padding-right: 5rem;
    h2{
        font-weight:lighter;
    }
    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }
    }
`;

export const Image = Styled.div`
    z-index:2;
    flex:1;
    overflow: hidden;
    img {
        width :100%;
        height :80vh;
        object-fit: cover;
    }
`;

export const Hide = Styled.div`
    overflow:hidden;
`;
