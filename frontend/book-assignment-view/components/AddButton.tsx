"use client"

import { Button } from '@mui/material';
import { ButtonProps } from "@/utils/types";

import { useReadingList } from "@/hooks/useReadingList"
import { useQuery } from "@apollo/client";
import { GET_READING_LIST } from "@/utils/apollo/queries";

const AddButton = (props: ButtonProps) => {
    const {book: bookDetails} = props

    const { addToReadingList, isBookInReadingList } = useReadingList()
    const { loading, error, data } = useQuery(GET_READING_LIST)
    
    // if it's done loading the data when it renders it checks if the book is in the reading list
    const alreadyAdded = !loading && data ? isBookInReadingList(bookDetails, data?.readingList) : false;

    const updateReadingList = () => {
        addToReadingList(bookDetails)
    }


    return (
        <Button
            onClick={updateReadingList}
            variant="contained"
            sx={{
                width: '100%',
                marginTop: "1rem",
                color: 'white',
                borderRadius: 16, 
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'none',
                backgroundColor: '#335C6E',
                '&:hover': { backgroundColor: '#244D5F'},
            }}
            disabled={alreadyAdded}
        >
            {alreadyAdded ?  'Added' : 'Add to Reading List'}
        </Button>
    )
}

export default AddButton