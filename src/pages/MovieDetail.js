import React, { useState, useEffect } from 'react';
import { Box, Grid, LinearProgress, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { getMovieDetail } from '../util/MovieAPI';

const imgStyle = {
    "width": "90%"
}

const MovieDetail = ({ match }) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getMovieDetail({movie_id: match.params.name})

                setData(result.data.data.movie)
                setLoading(false) // 스피너 false
            } catch (err) {

            }

        };

        fetchData();
    }, []);

    const moviePanel = data && (
        <Grid container>
            <Grid item={true} xs={5}>
                <img src={data.large_cover_image} alt={data.title_long + '의 이미지'} style={imgStyle}/>
            </Grid>
            <Grid xs={7} item={true}>
                <Grid container>
                    <Grid xs={9} item={true}>
                        <Typography variant="h3" gutterBottom>{data.title_long}</Typography>
                        <Typography variant="subtitle1" gutterBottom>Like: {data.like_count}</Typography>
                        <Typography variant="subtitle1" gutterBottom>Download: {data.download_count}</Typography>
                    </Grid>
                    <Grid xs={3} item={true}>
                        <Typography variant="caption" display="block" gutterBottom>rating: {data.rating}</Typography>
                        <Rating name="read-only" value={(data.rating / 2)} precision={0.1} readOnly />
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="body1" gutterBottom>{data.description_full}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )

    return (
        <Box width="75%" mt={3} display="flex" justifyContent="center">
            {isLoading === true ? <LinearProgress /> : null}
            {data && moviePanel}
        </Box>

    );

}

export default MovieDetail