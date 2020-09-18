import React, {useCallback, useState} from 'react'
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

export default ({clickButton}) => {

    const [currentSort, setCurrentSort] = useState({
        sortBy: "date_added",
        orderBy: "desc"
    })

    const clickEvent = useCallback((sortBy) => {
        const targetOrder = currentSort.orderBy === "asc" ? "desc" : "asc"
        if(currentSort.sortBy === sortBy) {
            setCurrentSort({
                orderBy: targetOrder, 
                sortBy
            })
            clickButton({sortBy, orderBy: targetOrder})
        } else {
            setCurrentSort({
                orderBy: "desc", 
                sortBy
            })
            clickButton({sortBy, orderBy: "desc"})
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
        </Box>
    )
}


