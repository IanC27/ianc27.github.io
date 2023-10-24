import { Container, Typography, Box, Chip, ImageList, ImageListItem } from '@mui/material'
import parse from 'html-react-parser';

function Project({content, title, roles, skills, images}) {

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

  let imageList = (<></>);
  if (images) {
    imageList = (
      <ImageList cols={images.length} >
          {images.map((image) => (
            <ImageListItem key={image}>
              <img src={image} />
            </ImageListItem>
          ))}

        </ImageList>
    )
  }


  return ( 
  <>
    <Container sx={{marginTop: 12}}>
        <Typography variant='h5'>{title}</Typography>
        {imageList}
        {parse(content)}
        {roleList}
        {skillList}
    </Container>
  </>
  )
}

export default Project