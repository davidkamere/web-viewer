import { booksData } from '../data/books';
import { readingList } from '../data/readingList'
import { Book, AddToReadingListArgs } from '../data/types'

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
    }
  }
};
