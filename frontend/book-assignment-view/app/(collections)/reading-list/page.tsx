"use client"

import { Box } from "@mui/material"

import AllBooks from "@/components/AllBooks"

import { useQuery } from "@apollo/client"
import { GET_READING_LIST } from "@/utils/apollo/queries"


const ReadingList = () => {
    const { loading, error, data } = useQuery(GET_READING_LIST)
       
    return (
        <Box sx={{width: "100%", marginBottom: "3rem"}}>
            <AllBooks loading={loading} books={data?.readingList}/>
        </Box>
    )
}

export default ReadingList