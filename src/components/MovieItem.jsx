import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const imgStyle = {
    "width": "90%"
}

const MovieItem = ({movie}) => {
    return (
        <Box display="flex" justifyContent="center" mb={5} p={2}>
            <Paper>
                <Grid container>
                    <Grid item={true} xs={3}>
                        <img src={movie.medium_cover_image} alt={movie.title + '의 이미지'} style={imgStyle} />
                    </Grid>
                    <Grid item={true} xs={7}>
                        <Grid>
                            <Typography variant="h4" gutterBottom>{movie.title}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="body1" gutterBottom>{movie.summary}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={2}>
                        <Grid>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography variant="caption" gutterBottom>rating: {(movie.rating)} / 10</Typography>
                                <Rating name="read-only" value={(movie.rating / 2)} precision={0.1} readOnly />
                            </Box>
                        </Grid>
                        <Grid>
                            <Link to={`/movie/${movie.id}`} style={
                                {
                                    float: "right",
                                    marginRight: "10px",
                                    color: "cornflowerblue",
                                    fontSize: "0.9em"
                                }
                            }>[자세히 보기]</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>

    );
}

export default MovieItem