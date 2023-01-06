import React, { useState } from 'react';
import { Box, Typography, FilledInput, IconButton } from '@mui/material';
import { Bookmark, Search } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [word, setWord] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedWord = word.trim().toLowerCase();
        if(!trimmedWord || trimmedWord.split(' ').length > 1) return;
        navigate(`/search/${word}`);
    }
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <img className='img-cls' src="https://img.freepik.com/free-vector/online-library-flat-composition_1284-73141.jpg?w=1380&t=st=1672915838~exp=1672916438~hmac=b57f8924f673fbb97a141fe5db1f052f116007b4c6aaf61e5bf971ec94e4a95c" alt="Book" />
                <Typography
                    color="primary"
                    sx={{
                        mt: 3,
                        mb: 2
                    }} variant='h4'>Dictionary</Typography>
                <Typography color="GrayText" sx={{
                    mb: 3
                }}>Find meaning and save for quick reference</Typography>
                <form onSubmit={handleSubmit}>
                    <FilledInput value={word}
                        onChange={event => setWord(event.target.value)}
                        disableUnderline placeholder='Search Word' sx={{
                            mb: 2,
                            backgroundColor: 'white',
                            borderRadius: 2,
                            boxShadow: '0px 10px 25px rgba(0,0,0,0.05)',
                            '& .MuiFilledInput-input': {
                                p: 2,
                            }
                        }}
                        startAdornment={<Search color="disabled" />}
                    />
                </form>
                <IconButton sx={{
                    borderRadius: 2,
                    p: 2,
                    color: '#fff',
                    background: 'linear-gradient(138.72deg, #dc8295 0%, #dc687c 95.83%)',
                    boxShadow: '0px 10px 10px rgba(221,114,133,0.2)',
                }}><Bookmark /></IconButton>
            </Box>
        </div>
    )
}

export default Home;