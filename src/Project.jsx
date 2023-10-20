import { Container, Typography, Box, Chip } from '@mui/material'
import parse from 'html-react-parser';

function Project({content, title, roles, skills}) {

  let roleList = (<></>);
  if (roles) {
    roleList = (
      <>
        <Typography variant='h6'>Roles:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap' }}>
          {roles.map((role, index) => (
            <Chip key={index} label={role} sx={{ margin: 1 }} />
          ))}
        </Box>
      </>
    );
  }

  let skillList = (<></>);
  if (skills) {
    skillList = (
      <>
        <Typography variant='h6'>Skills:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap' }}>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} sx={{ margin: 1 }} />
          ))}
        </Box>
      </>
    );
  }


  return ( 
  <>
    <Container sx={{marginTop: 12}}>
        <Typography variant='h5'>{title}</Typography>
        
        {parse(content)}
        {roleList}
        {skillList}
    </Container>
  </>
  )
}

export default Project