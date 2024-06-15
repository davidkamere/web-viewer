"use client"

import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useEffect, useRef } from 'react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {

    
   
    return (
        <Box sx={{marginY: '20px'}}>
            <TextField 
                variant="standard"
                placeholder="Search books by title"
                fullWidth
                InputProps={{ 
                    sx: { 

                        fontSize: '4rem',
                        fontWeight: 'bold',
                        paddingY: '10px',
                        '& .MuiInputBase-input::placeholder': {
                            color: '#F76434', 
                            fontWeight: 'bold' 
                        },
                        '& .MuiInputBase-input:focus::placeholder': {
                            
                            color: '#F76434',
                        },
                        '&:after': {
                            borderBottom: '2px solid #555' // Underline color on focus
                        }
                    },
                    autoFocus: true
                    
                    
                }}
                onChange={(e) => onChange(e.target.value)}  
            />
        </Box>
    )
}

export default SearchBar