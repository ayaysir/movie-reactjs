import React, { useState, useEffect } from 'react';
import {Container, Box, Paper, LinearProgress} from '@material-ui/core';
import axios from "axios"; 

const mapToComponent = data => {
    return data.map((movie, i) => {
        return (
            <Paper>
                <Box mb={2} p={2} key={i}>
                    <p><img src={movie.medium_cover_image} /></p>
                    <p>Title: {movie.title}</p>
                    <p>Summary: {movie.summary}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Url: {movie.url}</p>
                </Box>
            </Paper>
        );
    })
}

const Movie = ({match}) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    'https://yts.mx/api/v2/list_movies.json?limit=10',
                );

                setData(result.data);
                setLoading(false) // 스피너 false
            } catch(err) {

            }
     
        };
     
        fetchData();
    }, []);

    console.log("data", data)
    
    return (
        <Container>
            <h3>영화: {match.params.name}</h3>
            {isLoading === true ? <LinearProgress /> : null}
            {data && mapToComponent(data.data.movies)}
        </Container>
        );

}

export default Movie