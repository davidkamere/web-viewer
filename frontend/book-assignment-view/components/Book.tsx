

import Image from 'next/image'
import { BookType } from '../utils/types'
import { Box, Typography } from '@mui/material'
import { Button } from '@mui/material';

interface bookProps {
    book: BookType
}

const Book = (props: bookProps) => {
    const bookDetails = props.book
   
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={`/${bookDetails.coverPhotoURL}`} alt={bookDetails.title} width={240} height={240}/>
            <Box sx={{ maxWidth: '240px', textAlign: 'left' }}>
                <Typography variant='h6' sx={{marginTop: "1rem", fontWeight: 'bold'}}>{bookDetails.title}</Typography>
                <Typography variant='subtitle1' sx={{marginTop: "1rem"}}>{bookDetails.author}</Typography>
                <Button
                    variant="contained"
                    sx={{
                        width: '100%',
                        marginTop: "1rem",
                        backgroundColor: '#FABD33',
                        color: 'black',
                        borderRadius: '20px', 
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textTransform: 'none', 
                        '&:hover': {
                            backgroundColor: '#FAAD00',
                        },
                        '&:active': {
                            backgroundColor: '#FABD33', 
                        },
                    }}
                >
                    Add to Reading List
                </Button>
            </Box>
            {/* <p>Reading Level: {bookDetails.readingLevel}</p> */}
        </Box>
    )
}

export default Book