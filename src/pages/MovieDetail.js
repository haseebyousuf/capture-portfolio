import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";


//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
    const location = useLocation();
    const url = location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //useEffect
    useEffect(() => {
        const currentMovie = movies.filter(
            (stateMovie) => stateMovie.url === url
        );
        setMovie(currentMovie[0]);
    }, [movies, url]);
    return (
        <>
            {movie && (
                <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie" />
                    </ImageDisplay>
                </Details>
            )}
        </>
    );
};

const Details = Styled(motion.div)`
    color:white;
`;

const HeadLine = Styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width:100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = Styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;
const ImageDisplay = Styled.div`
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    } 
`;
const AwardStyle = Styled.div`
    padding: 3rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 50%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem; 
    }
    p{
        padding: 2rem 0rem;
    }
`;

export const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p> {description}</p>
        </AwardStyle>
    );
};

export default MovieDetail;
