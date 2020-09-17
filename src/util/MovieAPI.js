import axios from 'axios'

const getMovies = async (params) => {
    const result = await axios.get(
        'https://yts.mx/api/v2/list_movies.json',
        {
            params
        }
    )

    return result
}

const getMovieDetail = async (params) => {
    const result = await axios.get(
        'https://yts.mx/api/v2/movie_details.json',
        {
            params
        }
    )

    return result
}

export {getMovies, getMovieDetail}