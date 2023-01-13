import React from "react";
import Styled from "styled-components";
const NotFound = () => {
    return (
        <NotFoundDiv>
            <h1>NOT FOUND!!</h1>
        </NotFoundDiv>
    );
};

const NotFoundDiv = Styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    color:white;
`;
export default NotFound;
