import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider, CssBaseline, Grid } from '@mui/material';
import Home from './components/Home';
import Bookmarks from './components/Bookmarks';
import Defination from './components/Defination';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sx={{p:2}}>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/bookmarks' element={<Bookmarks />} />
              <Route exact path='/search/:word' element={<Defination />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </ThemeProvider>

  )
}

export default App;
