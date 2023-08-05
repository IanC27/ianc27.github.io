import React from 'react'
//import "./index.css"
import { styled } from '@mui/material/styles'
import { Typography, Paper, Box, Avatar, Stack } from '@mui/material'

const NameTag = styled(Paper)(() => ({
    "fontSize":"1rem",
    "padding":"0.5rem",
    "display":"block",
    "textAlign":"left",
    "width":300,
    "height":"30%",
    "backgroundColor":"white",
    "color":"blue",
    "border":"5px solid blue",
    "borderRadius":"15pt",
    "marginBottom": 10,
  }))

export default function Home() {
  return (
    <Box>
      <Stack
          direction={{sm: 'row', xs: 'column'}} 
          spacing={4}
          alignItems="center"
          justifyContent="space-evenly"
          sx={{marginTop: 12}}
          >
          <NameTag elevation={3}>
          <Typography variant='body1'>
            Hello, my name is 
          </Typography>
        <Typography sx={{"textAlign":"center","fontSize":"4rem","color":"secondary.main"}} variant='h5'>
          Ian C.
        </Typography>
        <Typography sx={{"textAlign":"center"}} variant='body1'>
        {/* turn these into logos */}
          <a href="https://github.com/IanC27">Github</a>
          {" — "}
          <a href="https://sevenstudios.itch.io/">itch.io</a>
          {" — "}
          <a href="https://www.linkedin.com/in/iankc/">Linkedin</a>
        </Typography>
        </NameTag>
        <Box sx={{}}>
          <Typography sx={{}} variant="body1">
          I'm a game designer, programmer, and resident of planet Earth.
          </Typography>
        </Box>
          
      </Stack>
      
      
    </Box>
  )
}