"use client"

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import SearchBar from "./SearchBar";
import { BookType } from "../utils/types"
import Book from "./Book";
import { Circle } from "@mui/icons-material";


export interface booksProps {
    books: BookType[],
    loading: boolean
}

const AllBooks = (props: booksProps) => {
    
    const {books, loading} = props
    const [bookList, setBookList] = useState<BookType[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredBooks, setFilteredBooks] = useState<BookType[]>([])

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const columns = isSmallScreen ? 1 : Math.min(filteredBooks.length, 5);

    useEffect(() => {
        if(books?.length > 0){
            setBookList(books)
        }
    }, [books])

    useEffect(() => {
        if (bookList?.length > 0) {
            const trimmedQuery = searchQuery.trim().toLowerCase()
    
            if (trimmedQuery === '') {
                setFilteredBooks(bookList)
            } else {
                const filtered = bookList.filter((book: BookType) =>
                    book.title.toLowerCase().includes(trimmedQuery)
                )
                // TO DO: Add not found feature
                setFilteredBooks(filtered.length > 0 ? filtered : bookList)
            }
        }
    }, [bookList, searchQuery]);


    return (
        <>  
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingX: '25px'}}>
                {!loading && filteredBooks.length > 0 && (
                    <>
                        <Box sx={{width: '100%', marginBottom: '3rem'}}>
                            <SearchBar value={searchQuery} onChange={setSearchQuery} />
                        </Box>
                        <Box sx={{ alignSelf: 'flex-start', marginBottom: '3rem' }}>
                            <Typography sx={{}} color={'#335c6e'} variant='h6'>
                                {bookList.length} books<Circle sx={{ color: '#F76434', fontSize: 10, marginX: '0.5rem' }}/>showing {filteredBooks.length} of {bookList.length}
                            </Typography>
                        </Box>
                        
                        <Box sx={{width: '100%'}}>
                            <Grid container spacing={12} justifyContent="center">  
                                {filteredBooks.map((book: BookType) => (
                                    <Grid key={uuidv4()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <Book book={book} />
                                    </Grid>
                                ))}
                            </Grid> 
                        </Box>
                    </>
                )}
            </Box>
        </>
    )
}

export default AllBooks