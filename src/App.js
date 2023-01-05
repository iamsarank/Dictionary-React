import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from './components/Home';
import Bookmarks from './components/Bookmarks';
import Defination from './components/Defination';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/bookmarks' element={<Bookmarks />} />
          <Route exact path='/search/:word' element={<Defination/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App;
