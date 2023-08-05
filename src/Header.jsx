import React from 'react'

import { Typography, AppBar, Box, Toolbar, Button, IconButton} from '@mui/material'


export default function Header() {
  const pages = ["About", "Games", "Other"];
  return (
    <AppBar>
      <Toolbar>
        <IconButton color='inherit'>
        </IconButton>
        <Box sx={{ flexGrow: 1, display: { md: 'flex', sm: 'inline' } }}>
          {pages.map((page) => (
            <Button color='inherit' key={page}>
                <Typography variant='h6'>{page}</Typography>
              </Button>
          ))} 
        </Box>
      </Toolbar>
    </AppBar>
  );
}
