import React, { useCallback, useState } from 'react'
import { Box, ButtonGroup, Button } from '@material-ui/core'

const categories = [{
    nameKo: "등록일",
    apiString: "date_added"
}, {
    nameKo: "제목",
    apiString: "title"
}, {
    nameKo: "출시연도",
    apiString: "year"
}, {
    nameKo: "평점",
    apiString: "rating"
}]

export default ({ clickButton, sendMinRating, sendResolution }) => {

    const [currentSort, setCurrentSort] = useState({
        sortBy: "date_added",
        orderBy: "desc"
    })

    const [ratingValue, setRatingValue] = React.useState(0);
    const [resolution, setResolution] = React.useState("all");

    const handleRatingChange = (event) => {
        const minimumRating = event.target.value
        setRatingValue(minimumRating)
        sendMinRating(minimumRating)
    }

    const handleResolutionChange = (event) => {
        const resolution = event.target.value
        setResolution(resolution)
        sendResolution(resolution)
    }

    const clickEvent = useCallback((sortBy) => {
        const targetOrder = currentSort.orderBy === "asc" ? "desc" : "asc"
        if (currentSort.sortBy === sortBy) {
            setCurrentSort({
                orderBy: targetOrder,
                sortBy
            })
            clickButton({ sortBy, orderBy: targetOrder })
        } else {
            setCurrentSort({
                orderBy: "desc",
                sortBy
            })
            clickButton({ sortBy, orderBy: "desc" })
        }
    }, [clickButton, currentSort])
    // useCallback 뒤 배열에 업데이트할 useState 변수 지정해야 함


    const eachButton = (category) => (
        <Button
            variant={currentSort.sortBy === category.apiString ? "contained" : ""}
            onClick={() => clickEvent(category.apiString)}
            key={category.apiString}
        >
            {category.nameKo} {currentSort.sortBy === category.apiString ? (currentSort.orderBy === "asc" ? "▲" : "▼") : null}
        </Button>
    );

    

    return (
        <Box>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                {categories.map(each => eachButton(each))}
            </ButtonGroup>

            <label style={{marginLeft: "10px", marginRight: "5px"}}>최소 평점 필터</label>
            <select onChange={handleRatingChange}>
                {[0,1,2,3,4,5,6,7,8,9].map(num => <option key={num} value={num}>{num === 0 ? "--NONE--" : num}</option>)}
            </select>
            
            <label style={{marginLeft: "10px", marginRight: "5px"}}>해상도 필터</label>
            <select onChange={handleResolutionChange}>
                {["all", "720p", "1080p", "2160p", "3D"].map(reso => <option key={reso} value={reso}>{reso === "all" ? "--ALL--" : reso}</option>)}
            </select>

        </Box>
    )
}


