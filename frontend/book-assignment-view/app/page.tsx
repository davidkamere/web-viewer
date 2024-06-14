"use client"

import styles from "./page.module.css";
import AllBooks from "@/components/AllBooks";
import { useQuery, gql } from "@apollo/client"


const GET_ALL_BOOKS = gql`
  {
      books {
          author
          coverPhotoURL
          readingLevel
          title
      }
  }
` 

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS)
  return (
    <main className={styles.main}>
      <AllBooks loading={loading} books={data?.books}/>
    </main>
  );
}
