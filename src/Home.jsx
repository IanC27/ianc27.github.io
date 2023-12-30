import { Container, Typography, Box, Stack } from '@mui/material'

import { NameTag } from './Nametag';
import ProjectFilter from './ProjectFilter';

/*
const NameTag = styled(Paper)(() => ({
    "fontSize":"1rem",
    "padding":"0.5rem",
    "display":"block",
    "textAlign":"left",
    "width":300,
    "height":"40%",
    "backgroundColor":"white",
    "backgroundImage":"linear-gradient(#43714a 40%, white 40.5%, white 95%, #43714a 95.5%)",
    "color":"white",
    "border":"",
    "borderRadius":"15pt",
    "marginBottom": 10,
    "transform": "rotate(-2deg)"
  }));
*/

export default function Home() {
  return (
    <Container>
      <Stack
          id="about me"
          direction='column' 
          spacing={4}
          alignItems="center"
          justifyContent="space-evenly"
          mt={6}
          mb={6}
        >
          {/*<img src="./nametag.png" alt="" />*/}
          <NameTag elevation={4} sx={{}}>
            <Typography sx={{"textAlign":"center","fontSize":"2rem", "lineHeight":"100%"}}>
              Hello 
            </Typography>
            <Typography variant='body1' align='center'> 
              my name is 
            </Typography>
            <Typography sx={{"textAlign":"center","fontSize":"4rem","color":"secondary.main"}} variant='h4'>
              Ian C.
            </Typography>
          <Typography sx={{"textAlign":"center","lineHeight":"100%"}} variant='body1'>
            <a href="https://github.com/IanC27">
              <img src="/picons_github_icon.svg" alt="Github Icon" width="12%"/>
            </a>
            {" — "}
            <a href="https://sevenstudios.itch.io/">
              <img src="/iconfinder_dot_io_itch_icon.svg" alt="Itch.io Icon" width="12%"/>
            </a>
            {" — "}
            <a href="https://www.linkedin.com/in/iankc/">
              <img src="/picons_linkedin_icon.svg" alt="Linkedin Icon" width="12%"/>
            </a>
          </Typography>
          </NameTag>
          <Box sx={{}}>
          <Typography sx={{maxWidth: 1000}} variant="body1">
            {`
            Hi! I'm a game designer and programmer, and these are some of my projects.
            I would describe myself as a generalist; I like to solve all manner of problems from all areas of development: 
            from low-level systems debugging to scripting core gameplay.
            But in particular, I enjoy creating useful and highly re-usable components to make things like 
            level design easier. I also like UX design, improving interfaces and player experience to be accessible and
            easy to understand.
            `}
          </Typography>
        </Box>
      </Stack>
      <ProjectFilter />    
    </Container>
  )
}