import axios from 'axios'

const getMovies = async (params) => {
    try {
        const result = await axios.get(
            'https://yts.mx/api/v2/list_movies.json',
            {
                params
            }
        )
        return result
    } catch(err) {
        throw err
    }
    
}

const getMovieDetail = async (params) => {
    try {
        const result = await axios.get(
            'https://yts.mx/api/v2/movie_details.json',
            {
                params
            }
        )
        return result
    } catch(err) {
        throw err
    }
    
}

export {getMovies, getMovieDetail}