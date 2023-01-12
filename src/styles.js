import Styled from "styled-components";
export const About = Styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 8rem;
    color: white;
    @media (max-width: 1300px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
  }
`;

export const Discreption = Styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight:lighter;
    }
    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }
        /* text-align: center; */
    }
`;

export const Image = Styled.div`
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