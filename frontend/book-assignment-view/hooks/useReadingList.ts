import { useMutation } from '@apollo/client';
import { BookType } from '@/utils/types';
import { GET_READING_LIST, REMOVE_FROM_READING_LIST, ADD_TO_READING_LIST, GET_ALL_BOOKS } from '@/utils/apollo/queries';


export const useReadingList = () => {

    const [addBookMutation] = useMutation(ADD_TO_READING_LIST, {
        refetchQueries: [{ query: GET_READING_LIST }, { query: GET_ALL_BOOKS }],
    });
    const [removeBookMutation] = useMutation(REMOVE_FROM_READING_LIST, {
        refetchQueries: [{ query: GET_READING_LIST }, { query: GET_ALL_BOOKS }],
    });
    
    const addToReadingList = async (book: BookType) => {
        try {
            const { data } = await addBookMutation({
                variables: {
                    title: book.title,
                    author: book.author,
                    coverPhotoURL: book.coverPhotoURL,
                    readingLevel: book.readingLevel,
                },
            });
            return data.addToReadingList;
        } catch (error) {
            // replace with better error handling
            console.error("Error adding book to reading list:", error)
        }
    };

    const removeFromReadingList = async (book: BookType) => {
        try {
            const { data } = await removeBookMutation({
                variables: {
                    title: book.title,
                    author: book.author,
                    coverPhotoURL: book.coverPhotoURL,
                    readingLevel: book.readingLevel,
                },
            });
            return data.removeFromReadingList;
        } catch (error) {
            // replace with better error handling
            console.error("Error removing book from reading list:", error);
        }
    };

    const isBookInReadingList = (book: BookType, currentReadingList: BookType[]) => {
    
        return currentReadingList?.some(
            (item: BookType) =>
                item.title === book.title &&
                item.author === book.author &&
                item.coverPhotoURL === book.coverPhotoURL &&
                item.readingLevel === book.readingLevel
        );
    };

    return {
        addToReadingList,
        removeFromReadingList,
        isBookInReadingList,
    };
}