import React from 'react'
//import "./index.css"
import { Typography } from '@mui/material'
import { Paper } from '@mui/material'

export default function Header() {
  return (
    <div>    
    <Paper 
    sx={{"fontSize":"1rem","padding":"0.5rem","display":"block","textAlign":"left","margin":"auto","maxWidth":300,"height":"30%","backgroundColor":"white","color":"blue","border":"5px solid blue","borderRadius":"15pt"}}
    elevation={3}
    >
    <Typography variant='body1'>
        Hello, my name is 
    </Typography>
    
    <Typography sx={{"textAlign":"center","fontSize":"4rem","color":"secondary.main"}} variant='h5'>Ian C.</Typography>
    <Typography sx={{"textAlign":"center"}} variant='body1'>
      {/* turn these into logos */}
        <a href="https://github.com/IanC27">Github</a>
        {" — "}
        <a href="https://sevenstudios.itch.io/">itch.io</a>
        {" — "}
        <a href="https://www.linkedin.com/in/iankc/">Linkedin</a>
    </Typography>
    
    </Paper>
      <Typography>I design and develop games and software. Here you'll find some of my work</Typography>
    </div>
    
  )
}
