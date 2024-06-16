import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';


export default function NotFound() {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center', 
                
            }}
        >
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', marginTop: '3rem' }}>
                Oops! Page Not Found
            </Typography>
            <Typography variant="subtitle1" sx={{margin: '1rem' }}>
                We couldn't find that page. Maybe try a different search or return home.
            </Typography>
            <Link href="/" passHref>
                <Button 
                    variant ="contained"
                    sx = {{
                        backgroundColor: '#5acccc' ,
                        borderRadius: 16,
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        color: 'black',
                        margin: '1rem',
                        '&:hover': {
                            backgroundColor: '#28b8b8',
                        },
                    }} 
                    
                >
                    Return Home
                </Button>
            </Link>
        </Box>
    );
}