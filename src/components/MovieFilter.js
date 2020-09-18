import React, {useCallback, useState} from 'react'
import { Box, ButtonGroup, Button, Typography } from '@material-ui/core'

export default ({clickButton}) => {

    const [currentSort, setCurrentSort] = useState({
        sortBy: "date_added",
        orderBy: "desc"
    })

    const clickEvent = useCallback((sortBy) => {
        setCurrentSort({sortBy: sortBy})
        clickButton(sortBy)
    }, [clickButton])

    return (
        <Box>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button variant={"contained"} onClick={() => clickEvent("date_added")}>등록일</Button>
                <Button variant={""} onClick={() => clickEvent("title")}>제목</Button>
                <Button variant={""} onClick={() => clickEvent("year")}>출시연도</Button>
                <Button variant={""} onClick={() => clickEvent("rating")}>평점 </Button>
            </ButtonGroup>
        </Box>
    )
}


