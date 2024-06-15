"use client"
import { Box, Tab, Tabs } from "@mui/material";
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
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    {links.map(link => (
                        <Link href={link.href} key={link.name} style={{ textDecoration: 'none', color:'inherit' }}>
                            <Box 
                                sx={[
                                    {
                                        borderRadius: 16,
                                        padding: '15px',
                                        textDecoration: 'none',
                                        // '&:hover': {
                                        //     backgroundColor: '#4AA088',
                                        // }

                                    },
                                    
                                    pathname === link.href && {
                                        backgroundColor:  '#335c6e' ,
                                        borderRadius: 16,
                                        padding: '15px',
                                        color: 'white',
                                        // '&:hover': {
                                        //     backgroundColor: '#335c6e',
                                            
                                        // }
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