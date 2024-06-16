export type BookType = {
    author: string,
    coverPhotoURL: string,
    readingLevel: string,
    title: string
}

export interface BookProps {
    book: BookType,
}

export interface BooksProps {
    books: BookType[],
    loading: boolean,
}

export interface ButtonConfig {
    button: JSX.Element; 
}

export interface ButtonConfigs {
    [key: string]: ButtonConfig;
}


export interface ButtonProps {
    book: BookType
}
