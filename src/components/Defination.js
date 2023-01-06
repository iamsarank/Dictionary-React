import React, { useEffect, useState, Fragment } from 'react';
import { Stack, Typography, Box, IconButton, Divider } from '@mui/material';
import { ArrowBack, BookmarkBorder, PlayArrow } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Defination = () => {
  const { word } = useParams();
  const navigate = useNavigate();
  const [definitions, setDefinitions] = useState([]);

  useEffect(() => {
    const fetchDef = async () => {
      const resp = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinitions(resp.data);
    }
    fetchDef();
  }, [])


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
        <Typography sx={{ textTransform: "capitalize" }} variant='h5'>{word}</Typography>
        <IconButton sx={{
          borderRadius: 2,
          p: 1,
          color: '#fff',
          background: theme => theme.palette.pink,
          boxShadow: '0px 10px 10px rgba(221,114,133,0.2)',
        }}>
          <PlayArrow /></IconButton>
      </Stack>
      {definitions.map((def, idx) =>
        <Fragment key={idx}>
          <Divider sx={{ display:idx === 0 ? 'none' : 'block', my:3}}/>
          {def.meanings.map(meaning =>
            <Box key={meaning.partOfSpeech} sx={{
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0px 10px 25px rgba(0,0,0,0.05)',
              p: 2,
              mt:3
            }}>
              <Typography sx={{textTransform:'capitalize'}} variant='subtitle1' color="GrayText">{meaning.partOfSpeech}</Typography>
             {meaning.definitions.map((definition,idx) => <Typography key={definition} variant='body2' sx={{textTransform:'capitalize',my:1}} color="GrayText">{meaning.definitions.length > 1 && `${idx + 1}.`}{definition.definition}</Typography>)}
            </Box>
          )}
        </Fragment>
      )}
    </>
  )
}

export default Defination;