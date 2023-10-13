import React from 'react';
import { Typography, AppBar, Box, Toolbar, Button, IconButton, Link, Stack} from '@mui/material';


export default function Header() {
  const sections = ["About Me", "Games", "Skills"];
  /*
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      console.log("yeas");
      section.scrollIntoView({behavior: 'smooth'});
    }
  }
  */

  return (
    <AppBar>
      <Toolbar>
        <IconButton color='inherit'>
        </IconButton>
        <Stack sx={{ flexGrow: 1, display: { md: 'flex', sm: 'inline' } }}
          direction='row'
          spacing={2}
          >  
            {sections.map((section) => (
              <Link
              href={`/#${section.toLowerCase()}`}
              color="inherit"
              variant='h5'
              key={section}
            >
              {section}
            </Link>
           
            ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}