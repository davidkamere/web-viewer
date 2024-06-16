"use client"

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

import { BookType, BooksProps } from "../utils/types"

import { Box, Grid, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";

import SearchBar from "./SearchBar";
import Book from "./Book";



const AllBooks = (props: BooksProps) => {
    
    const {books, loading} = props
    const [bookList, setBookList] = useState<BookType[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [noResult, setNoResult] = useState("")
    const [filteredBooks, setFilteredBooks] = useState<BookType[]>([])


    useEffect(() => {
        if(!loading){
            setBookList(books)
        }
        
    }, [books])

    
    useEffect(() => {
        if(!loading && filteredBooks.length === 0){
            setNoResult("Your Library is empty—time to add some books!")
        }
    }, [filteredBooks])

    useEffect(() => {
        
        // refreshes search query result message
        books?.length > 0 && setNoResult("")  
        
        if (bookList) {
            const trimmedQuery = searchQuery.trim().toLowerCase()
    
            if (trimmedQuery === '') {
                setFilteredBooks(bookList)
            } else {
                const filtered = bookList.filter((book: BookType) =>
                    book.title.toLowerCase().includes(trimmedQuery)
                )
                
                setFilteredBooks(filtered.length > 0 ? filtered : bookList)
                if(books.length > 0){
                    setNoResult(filtered.length > 0 ? "": "We couldn't find any matches. How about trying a different title?")
                }
            }
        }
    }, [bookList, searchQuery]);

    



    return (
        <>  
            {books && filteredBooks &&
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingX: '25px'}}>
                { 
                    <>
                        <Box sx={{width: '100%', marginBottom: '3rem'}}>
                            <SearchBar value={searchQuery} onChange={setSearchQuery} />
                        </Box>
                        <Box sx={{ alignSelf: 'flex-start', marginBottom: '3rem' }}>
                            <Typography sx={{fontWeight: 500}} color={'#FABD33'} variant='h6'>
                                {noResult}
                            </Typography>
                            <Typography sx={{fontWeight: 500}} color={'#335c6e'} variant='h6'>
                                {bookList.length} book{bookList.length !== 1 && 's'}<Circle sx={{ color: '#FABD33', fontSize: 10, marginX: '0.5rem' }}/>showing {filteredBooks.length} of {bookList.length}
                            </Typography>
                        </Box>
                        
                        <Box sx={{width: '100%'}}>
                            <Grid container spacing={12} justifyContent="center">  
                                {filteredBooks.map((book: BookType) => (
                                    <Grid key={uuidv4()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <Book book={book}/>
                                    </Grid>
                                ))}
                            </Grid> 
                        </Box>
                    </>
                }
            </Box>}
        </>
    )
}

export default AllBooks