import React from 'react'
import { Container } from '@mui/material'

function Project(props) {
    const {content} = props;

  return ( 
  <>
    <Container sx={{marginTop: 6}}>
        {content}
    </Container>
  </>
  )
}

export default Project