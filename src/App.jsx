import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { ThemeOptions } from './ThemeOptions';

import Home from './Home'
import gameProjects from './gameProjects';
import otherProjects from './otherProjects'
import Project from './Project';

function App() {
  const theme = createTheme(ThemeOptions);
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<Home/>} />

        {gameProjects.map((project => 
          (<Route key={project.title} path={project.url} element={
            <Project 
              content={project.page}
              title={project.title}
              roles={project.roles}
              skills={project.skills}
              images={project.images}
            />
          } />)
        ))}
        {otherProjects.map((project => 
          (<Route key={project.title} path={project.url} element={
            <Project 
              content={project.page}
              title={project.title}
              roles={project.roles}
              skills={project.skills}
              images={project.images}
            />
          } />)
        ))}

      </Routes>
    </ThemeProvider>
    
  )
}

export default App
/*

      */