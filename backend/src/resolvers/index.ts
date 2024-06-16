import { booksData } from '../data/books';
import { readingList } from '../data/readingList'
import { Book, AddToReadingListArgs, RemoveFromReadingListArgs } from '../data/types'

export const resolvers = {
  Query: {
    books: () => booksData,
    readingList: () => readingList,
  },

  Mutation: {
    addToReadingList: (_: unknown, args: AddToReadingListArgs): Book => {
      const { title, author, coverPhotoURL, readingLevel } = args
      const newBook: Book = { title, author, coverPhotoURL, readingLevel }
      readingList.push(newBook)
      return newBook
    },

    removeFromReadingList: (_: unknown, args: RemoveFromReadingListArgs): Book | null => {
      const { title, author, coverPhotoURL, readingLevel } = args;
      const bookIndex = readingList.findIndex(book =>
        book.title === title &&
        book.author === author &&
        book.coverPhotoURL === coverPhotoURL &&
        book.readingLevel === readingLevel
      );
      if (bookIndex === -1) {
        return null; // TO DO: Better Error Handling
      }
      const removedBook = readingList.splice(bookIndex, 1)[0];
      return removedBook;
    }
  }
};
