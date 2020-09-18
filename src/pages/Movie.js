import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Container, LinearProgress } from '@material-ui/core'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import MovieItem from '../components/MovieItem'
import MovieFilter from './../components/MovieFilter'
import { getMovies } from '../util/MovieAPI'

const PER_PAGE = 4

const Movie = () => {

    // 인스턴스 변수
    const currentPage = useRef(1)

    // 리퀘스트 상태
    const [loading, setLoading] = useState(false)
    const [hasNextPage, setHasNextPage] = useState()
    const [error, setError] = useState(false)

    // 영화 데이터
    const [data, setData] = useState([])

    // 정렬 기준
    const [currentOrder, setCurrentOrder] = useState({
        sortBy: null,
        orderBy: "desc"
    })

    // DOM ref

    const loadMovies = useCallback(async (params) => {
        try {
            setLoading(true)
            const result = await getMovies(params)

            return result.data.data
        } catch (err) {
            setError(err)
            console.log(error)
        } finally {
            setLoading(false) // 스피너 false
        }
    }, [error]);

    const moreLoad = useCallback(async (params) => {
        setLoading(true)
        const getData = await loadMovies(params)
        setLoading(false)

        // 영화가 더 이상 없다면 무한스크롤 중단
        if(getData.movies.length === 0) {
            setHasNextPage(false)
            return
        }
        setData(currentData => [...currentData, ...getData.movies])
    }, [loadMovies])

    useEffect(() => {
        const fetchData = async () => {
            const getData = await loadMovies({
                limit: PER_PAGE
            })
            setData(() => [...getData.movies])
            setHasNextPage(true)
        }
        fetchData()
       
    }, [loadMovies])

    const handleLoadMore = useCallback(() => {
        moreLoad({
            limit: PER_PAGE,
            page: ++currentPage.current
        })
    }, [moreLoad])

    // 무한스크롤
    const infiniteRef = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore: handleLoadMore
    })

    const order = useCallback((orderBy) => {
        alert(orderBy)

    }, [])

    return (
        <Container maxWidth="md" ref={infiniteRef}>
            <h3>영화 목록</h3>
            <MovieFilter clickButton={fromChild => order(fromChild)}/>
            {data.length > 0 && data.map(item => (<MovieItem movie={item} key={item.id}/>))}
            {loading === true ? <LinearProgress /> : null}
            <div style={{height: '30px'}}></div>
        </Container>
    );

}

export default Movie