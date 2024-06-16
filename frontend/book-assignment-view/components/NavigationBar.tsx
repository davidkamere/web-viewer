"use client"

import { Box } from "@mui/material";
import Link from "next/link"
import { usePathname } from 'next/navigation'

const NavigationBar = () => {
    const pathname = usePathname()

    const links = [
        {href: '/', name: 'All Books'},
        {href: '/reading-list', name: 'Reading List'}
    ]


    return (
        <>
            <Box sx={{ display: "flex", width: '100%' , marginY: '3rem' , justifyContent: "center"}}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    border: '1px solid white',
                    borderRadius: 16,
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.2)',
                    },
                }}
            >
                    {links.map(link => (
                        <Link href={link.href} key={link.name} style={{ textDecoration: 'none', color:'inherit' }}>
                            <Box 
                                sx={[
                                    {
                                        borderRadius: 16,
                                        padding: '15px',
                                        textDecoration: 'none',
                                    },
                                    
                                    pathname === link.href && {
                                        backgroundColor:  '#5acccc' ,
                                        borderRadius: 16,
                                        padding: '15px',
                                        color: 'white',
                                    }
                                    ]}
                            >
                                {link.name}
                            </Box>
                        </Link>  
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default NavigationBar