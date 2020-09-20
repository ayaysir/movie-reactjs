import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, LinearProgress, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { getMovieDetail } from './../util/MovieAPI';
import ErrorMessage from './../components/ErrorMessage'

import './MovieDetail.css'

const imgStyle = {
    "width": "90%"
}

const MovieDetail = ({ match, history }) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getMovieDetail({movie_id: match.params.name})

                setData(result.data.data.movie)
                setLoading(false) // 스피너 false
            } catch (err) {
                setError(err)
            }

        };

        fetchData();
    }, [match.params.name]);

    const moviePanel = data && (
        <Grid container>
            <Grid item={true} xs={5}>
                <img src={data.large_cover_image} alt={data.title_long + '의 이미지'} style={imgStyle}/>
                <p><button
                        onClick={() => history.goBack()} 
                        style={{
                                color: "cornflowerblue",
                                fontSize: "0.9em",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                textDecoration: "underline"
                                }}>
                        [목록으로 돌아가기]
                    </button>
                </p>
            </Grid>
            <Grid xs={7} item={true}>
                <Grid container>
                    <Grid xs={9} item={true}>
                        <Typography variant="h4" gutterBottom className="title-long">{data.title_long}</Typography>
                        <Box mt={3} mb={4}>
                            <Typography variant="subtitle1">Like: {data.like_count}</Typography>
                            <Typography variant="subtitle1">Download: {data.download_count}</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={3} item={true}>
                        <Typography variant="caption" display="block" gutterBottom>rating: {data.rating}</Typography>
                        <Rating className="rating-star" name="read-only" value={(data.rating / 2)} precision={0.1} readOnly />
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="body1" gutterBottom>{data.description_full}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )

    return (
        <Container maxWidth="md" style={ {marginTop: "30px"} }>
            {isLoading === true ? <LinearProgress /> : null}
            {data && moviePanel}
            {error ? <ErrorMessage error={error} /> : null}
        </Container>

    );

}

export default MovieDetail