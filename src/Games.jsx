import { Card, CardContent, Typography, CardHeader, CardMedia, CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Games() {
  const gameProjects = [
    {
    title: "Runner's Grave",
    subhead: "HTML5 Game Demo",
    dateRange: "Jun 2022--",
    roles: ["Solo Developer", "Programmer", "Artist",],
    skills: ["Javascript", "Phaser.js", "Data-driven design", "Tutorial Design"],
    summary: `Arcade-style maze runner made in Javascript with Phaser.js
    Randomly generated mazes using depth-first backtracker
    Data-driven level design using a JSON with level parameters`,
    img: "./runnergrave.png"
  },
  {
    title: "Antimony",
    subhead: "narrative adventure",
    img: "https://img.itch.zone/aW1nLzEyNjYyODM2LnBuZw==/315x250%23c/rPNGju.png"
  },
  {
    title: "The Solar Punk",
    subhead: "action",
    img: "https://img.itch.zone/aW1nLzExNjc4MjIxLnBuZw==/315x250%23c/iAU2ta.png"
  },
  {
    title: "The Solar Punk",
    subhead: "action",
    img: "https://img.itch.zone/aW1nLzExNjc4MjIxLnBuZw==/315x250%23c/iAU2ta.png"
  },
  {
    title: "The Solar Punk",
    subhead: "action",
    img: "https://img.itch.zone/aW1nLzExNjc4MjIxLnBuZw==/315x250%23c/iAU2ta.png"
  },
];


  return (
    <Container id='games' maxWidth="lg">
      <Grid container spacing={2} mt={5} justifyContent="left" alignItems="flex-start">
        {gameProjects.map((item) => (
          <Grid key={item} xs={12} md={3}>
          <Card sx={{minWidth: 12}} variant='outlined'>
            <CardActionArea
              onClick={() => console.log(item)}
            >
              <CardMedia
                component="img"
                image={item.img}
                height="200"
              />
            <CardHeader title={item.title} sx={{textAlign:"center"}}/>
            
            </CardActionArea>
          </Card>
        </Grid>
        ))}
        
        <Grid xs={6} md={3} sx={{borderWidth: 2, borderColor: "black"}}>
          hello
        </Grid>
      </Grid>

    </Container>
  );
}
