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


export const ADD_TO_READING_LIST = gql`
  mutation AddToReadingList($title: String!, $author: String!, $coverPhotoURL: String!, $readingLevel: String!) {
    addToReadingList(title: $title, author: $author, coverPhotoURL: $coverPhotoURL, readingLevel: $readingLevel) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;


export const REMOVE_FROM_READING_LIST = gql`
  mutation RemoveFromReadingList($title: String!, $author: String!, $coverPhotoURL: String!, $readingLevel: String!) {
    removeFromReadingList(title: $title, author: $author, coverPhotoURL: $coverPhotoURL, readingLevel: $readingLevel) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;
