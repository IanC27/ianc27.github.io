import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { ThemeOptions } from './ThemeOptions';
import Header from './Header'
import Games from './Games'

function App() {
  const theme = createTheme(ThemeOptions);

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header/>

    <h2>Games</h2>
    
    <h2>Software</h2>
    
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/games"/>Games</li>
    </ul>
    <div>
      <Routes>
        <Route path='/' Component={Games}/>
      </Routes>
    </div>
    </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App
