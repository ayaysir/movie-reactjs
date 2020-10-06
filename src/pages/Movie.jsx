import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Container, LinearProgress } from '@material-ui/core'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import MovieItem from '../components/MovieItem'
import MovieFilter from '../components/MovieFilter'
import ErrorMessage from '../components/ErrorMessage'
import { getMovies } from '../util/MovieAPI'

const PER_PAGE = 4

const Movie = () => {

    // 인스턴스 변수
    const currentPage = useRef(0)

    // 리퀘스트 상태
    const [loading, setLoading] = useState(false)
    const [hasNextPage, setHasNextPage] = useState()
    const [error, setError] = useState(false)

    // 영화 데이터
    const [data, setData] = useState([])

    // 정렬 기준
    const [currentOrder, setCurrentOrder] = useState({
        sortBy: null,
        orderBy: "desc",
        minimumRating: 0,
        resolution: null
    })

    // DOM ref

    const reset = useCallback(() => {
        currentPage.current = 0
        setHasNextPage(true)
        setData(() => [])
    }, [currentPage, setHasNextPage, setData])

    const loadMovies = useCallback(async (params) => {
        try {
            setLoading(true)
            const result = await getMovies(params)
            return result.data.data
        } catch (err) {
            setError(err)
            console.error("AJAX Error", err)
        } finally {
            setLoading(false) // 스피너 false
        }
    }, [setError]);

    const moreLoad = useCallback(async () => {

        const params = {
            limit: PER_PAGE,
            page: ++currentPage.current,
            sort_by: currentOrder.sortBy || "date_added",
            order_by: currentOrder.orderBy || "desc",
            minimum_rating: currentOrder.minimumRating,
            resolution: currentOrder.resolution
        }

        const getData = await loadMovies(params)

        // 영화가 더 이상 없다면 무한스크롤 중단
        if ((getData && !getData.movies) || !getData) {
            setHasNextPage(false)
            return
        } else {
            setHasNextPage(true)
            setData(currentData => [...currentData, ...getData.movies])
        }
    }, [loadMovies, currentPage, currentOrder])


    useEffect(() => {
        moreLoad()
    }, [moreLoad])

    // 무한스크롤
    const infiniteRef = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore: moreLoad
    })

    // 순서
    const order = useCallback((sortInfo) => {
        reset()
        setCurrentOrder(currentOrder => ({
            ...currentOrder,
            orderBy: sortInfo.orderBy,
            sortBy: sortInfo.sortBy
        }))
    }, [setCurrentOrder, reset])

    // 최소 평점
    const filterByRating = useCallback((minimumRating) => {
        reset()
        setCurrentOrder(currentOrder => ({
            ...currentOrder, 
            minimumRating 
        }))

    }, [setCurrentOrder, reset])

    const filterByResolution = useCallback((resolution) => {
        reset()
        setCurrentOrder(currentOrder => ({
            ...currentOrder, 
            resolution
        }))

    }, [setCurrentOrder, reset])

    return (
        <Container maxWidth="md" ref={infiniteRef}>
            <h3>영화 목록</h3>
            <MovieFilter 
                clickButton={propsObj => order(propsObj)} 
                sendMinRating={minRatingFromFilter => filterByRating(minRatingFromFilter)}
                sendResolution={resolutionFromFilter => filterByResolution(resolutionFromFilter)}
            />
            {data.length > 0 && data.map((item, i) => (<MovieItem movie={item} key={i} />))}
            {loading === true ? <LinearProgress /> : null}
            {hasNextPage === false && error === false ? <p>목록의 끝입니다.</p> : null}
            {error ? <ErrorMessage error={error} /> : null}
            <div style={{ height: '30px' }}></div>
        </Container>
    );

}

export default Movie