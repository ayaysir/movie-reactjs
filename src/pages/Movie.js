import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Grid, Paper, LinearProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import axios from "axios";

const mapToComponent = data => {
    return data.map((movie, i) => {
        return (
            <Box display="flex" justifyContent="center" mb={5} p={2} key={i} >
                <Paper>
                    <Grid container>
                        <Grid xs={3}>
                            <img src={movie.medium_cover_image} alt={movie.title + '의 이미지'}/>
                        </Grid>
                        <Grid xs={7}>
                            <Grid>
                                <h3>{movie.title}</h3>
                            </Grid>
                            <Grid>
                                <p>{movie.summary}</p>
                            </Grid>
                        </Grid>
                        <Grid xs={2}>
                            <Grid>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <p>평점: {(movie.rating)} / 10</p>
                                    <Rating name="read-only" value={(movie.rating / 2)} precision={0.1} readOnly />
                                </Box>
                            </Grid>
                            <Grid>
                                <Link to={`/movie/${movie.id}`}>[자세히 보기]</Link>
                        </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

        );
    })
}

const Movie = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    'https://yts.mx/api/v2/list_movies.json?limit=10',
                );

                setData(result.data)
                setLoading(false) // 스피너 false
            } catch (err) {

            }

        };

        fetchData();
    }, []);

    console.log("data", data)

    return (
        <Container width="75%">
            <h3>영화 목록</h3>
            {isLoading === true ? <LinearProgress /> : null}
            {data && mapToComponent(data.data.movies)}
        </Container>
    );

}

export default Movie