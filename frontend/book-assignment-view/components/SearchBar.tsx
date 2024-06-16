"use client"

import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useEffect, useRef } from 'react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {

    
    const debounceTimeout = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (debounceTimeout.current !== null) {
                clearTimeout(debounceTimeout.current)
            }
        };
    }, []);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value;

        // Clear previous timeout
        if (debounceTimeout.current !== null) {
            clearTimeout(debounceTimeout.current)
        }
        
        debounceTimeout.current = window.setTimeout(() => {
            onChange(searchText)
        }, 350);
    };

    return (
        <Box sx={{
            marginY: '20px',
            '@media (max-width: 600px)': {
                '& .MuiInputBase-input::placeholder': {
                    fontSize: '2rem', 
                },
            },
        }}>
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
                            color: '#FABD33', 
                            fontWeight: 'bold',
                            opacity: 1,
                            
                        },
                        '& .MuiInputBase-input:focus::placeholder': {
                            color: '#FABD33',
                        },
                        '&:after': {
                            borderBottom: '2px solid #555' // Underline color on focus
                        },
                        
                    },
                    autoFocus: true
                    
                    
                }}
                onChange={handleInputChange}  
            />
        </Box>
    )
}

export default SearchBar