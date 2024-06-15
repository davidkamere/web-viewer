import { gql } from '@apollo/client'

export const GET_READING_LIST = gql`
    query GetReadingList {
        readingList {
            title
            author
            coverPhotoURL
            readingLevel
        }
  }
`

export const GET_ALL_BOOKS = gql`
    {
        books {
            author
            coverPhotoURL
            readingLevel
            title
        }
    }
` 
