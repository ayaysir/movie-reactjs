import React, { useState, useEffect } from 'react';
import { Container, LinearProgress } from '@material-ui/core';
import axios from "axios";
import Movie from './Movie';

const MovieDetail = ({ match }) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    'https://yts.mx/api/v2/movie_details.json?movie_id=' + (match.params.name)
                );

                setData(result.data.data.movie)
                setLoading(false) // 스피너 false
            } catch (err) {

            }

        };

        fetchData();
    }, []);

    const moviePanel = data && (
        <>
            <img src={data.large_cover_image} alt={data.title_long + '의 이미지'} />
            <p>Like: {data.like_count}</p>
            <p>Download: {data.download_count}</p>
            <p>rating: {data.rating}</p>
            <p>{data.description_full}</p>
        </>
    )

    return (
        <Container>
            <h3>{match.params.name}</h3>
            {isLoading === true ? <LinearProgress /> : null}
            {data && moviePanel}
        </Container>

    );

}

export default MovieDetail