"use client"

import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";



type Book = {
    author: string,
    coverPhotoURL: string,
    readingLevel: string,
    title: string
}

interface booksProps {
    books: Book[],
    loading: boolean
}

const AllBooks = (props: booksProps) => {
    
    const {books, loading} = props
    const [bookList, setBookList] = useState<Book[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([])

    useEffect(() => {
        if(books?.length > 0){
            setBookList(books)
        }
    }, [books])

    useEffect(() => {
        if (bookList?.length > 0) {
            const trimmedQuery = searchQuery.trim().toLowerCase()
            setFilteredBooks(
                bookList.filter((book: Book) =>
                    book.title.toLowerCase().includes(trimmedQuery)
                )
            );
        }
    }, [bookList, searchQuery]);

    console.log("data data", bookList)

    return (
        <>
            {!loading && filteredBooks.length > 0 &&
                <>
                    <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    <div>
                        {
                        filteredBooks.map((book: Book) => (
                            <div key={book.author + book.title}>{book.title}</div>
                        ))
                        }
                    </div>
                </>
            }
        </>
    )
}

export default AllBooks