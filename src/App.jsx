import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { ThemeOptions } from './ThemeOptions';
import Header from './Header'
import Games from './Games'
import Home from './Home'
import Skills from './Skills';

function App() {
  const theme = createTheme(ThemeOptions);

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header/>
    <Home/>
    <Games/>
    <Skills/>
    </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App
