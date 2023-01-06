import React from 'react';
import { Stack, Typography, Box, IconButton } from '@mui/material';
import { ArrowBack, BookmarkBorder, PlayArrow } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

const Defination = () => {
  const { word } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>
        <IconButton>
          <BookmarkBorder />
        </IconButton>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{
        mt: 3,
        px: 4,
        py: 5,
        color: 'white',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(90.17deg, #191E5D 0.14%, #0F133A 98.58%)',
        boxShadow: '0pc 10px 20px rgba(19, 23, 71, 0.25)'
      }}>
        <Typography sx={{ textTransform:"capitalize"}} variant='h5'>{word}</Typography>
        <IconButton sx={{
          borderRadius: 2,
          p: 1,
          color: '#fff',
          background: theme => theme.palette.pink,
          boxShadow: '0px 10px 10px rgba(221,114,133,0.2)',
        }}>
          <PlayArrow /></IconButton>
      </Stack>
    </>
  )
}

export default Defination;