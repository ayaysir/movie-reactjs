import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, LinearProgress } from '@material-ui/core';

import MovieList from './../components/MovieList'

import useIntersectionObserver from './../hooks/useIntersectionObserver'
import { getMovies } from '../util/MovieAPI';

const PER_PAGE = 4

const Movie = () => {

    // 인스턴스 변수
    const currentPage = useRef(1)
    const totalPage = useRef(0)

    // 리퀘스트 상태
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // 영화 데이터
    const [data, setData] = useState([])

    // DOM ref
    const rootRef = useRef(null)
    const targetRef = useRef(null)

    const loadMovies = useCallback(async (params) => {
        try {
            setLoading(true)
            const result = await getMovies(params)

            return result.data.data.movies
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false) // 스피너 false
        }
    }, []);

    const initLoad = useCallback(async (params) => {
        const movies = await loadMovies(params)
        setData(movies)
    })

    useEffect(() => {
        initLoad({limit: PER_PAGE})
        console.log("data", data)
    }, [])

    // 무한스크롤

    return (
        <Container width="75%" ref={rootRef}>
            <h3>영화 목록</h3>
            {isLoading === true ? <LinearProgress /> : null}
            {data && <MovieList movies={data} />}
            
            {/* 무한스크롤 동작하기 위한 div */}
        </Container>
    );

}

export default Movie