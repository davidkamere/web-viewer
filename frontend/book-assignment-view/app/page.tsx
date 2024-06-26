"use client"


import AllBooks from "@/components/AllBooks"

import { Box } from "@mui/material"

import { GET_ALL_BOOKS } from "@/utils/apollo/queries"
import { useQuery } from "@apollo/client"


export default function Home() {
  
  const { loading, error, data } = useQuery(GET_ALL_BOOKS)
  
  return (
    <main>
      <Box sx={{width: "100%", marginBottom: "3rem" }}>
        <AllBooks loading={loading} books={data?.books}  />
      </Box>
    </main>
  );
}
