export interface Book {
    title: string
    author: string
    coverPhotoURL: string
    readingLevel: string
}
  
export interface AddToReadingListArgs {
    title: string
    author: string
    coverPhotoURL: string
    readingLevel: string
}