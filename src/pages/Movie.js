import React, { useState, useEffect } from 'react';
import axios from "axios"; 

const mapToComponent = data => {
    return data.map((movie, i) => {
        return (
            <div key={i}>
                <p><img src={movie.medium_cover_image} /></p>
                <p>Title: {movie.title}</p>
                <p>Summary: {movie.summary}</p>
                <p>Rating: {movie.rating}</p>
                <p>Url: {movie.url}</p>
            </div>
        );
    })
}

const Movie = ({match}) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://yts.mx/api/v2/list_movies.json?limit=10',
          );
     
          setData(result.data);
        };
     
        fetchData();
    }, []);

    console.log("data", data)
    
    return (
        <div>
            <h3>영화: {match.params.name}</h3>
            {data && mapToComponent(data.data.movies)}
        </div>
        );

}

export default Movie