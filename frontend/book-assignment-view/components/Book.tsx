"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { BookProps, ButtonConfigs } from '../utils/types'
import { Box, Typography } from '@mui/material'

import AddButton from './AddButton'
import RemoveButton from './RemoveButton'




const Book = (props: BookProps) => {
    const {book : bookDetails} = props
    const pathname = usePathname()

    const buttonConfigs: ButtonConfigs = {
        '/': {
            button: <AddButton book={bookDetails}/>
        },
        '/reading-list': {
            button: <RemoveButton book={bookDetails}/>
        }
    };

    const bookButton = buttonConfigs[pathname]
    

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center' 
            }}>
            <Image src={`/${bookDetails.coverPhotoURL}`} alt={bookDetails.title} width={240} height={240}/>
            <Box sx={{ maxWidth: '240px', textAlign: 'left' }}>
                <Typography variant='h6' sx={{marginTop: "1rem", fontWeight: 500}}>{bookDetails.title}</Typography>
                <Typography variant='subtitle1' sx={{marginTop: "1rem", color: "#949494"}}>{bookDetails.author}</Typography>
                {bookButton.button}
            </Box>
            {/* <p>Reading Level: {bookDetails.readingLevel}</p> */}
        </Box>
    )
}

export default Book