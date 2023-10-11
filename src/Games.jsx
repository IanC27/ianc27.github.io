import { Card, CardContent, Typography, CardHeader, CardMedia, CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {Link, redirect} from 'react-router-dom';

import gameProjects from './assets/games';

export default function Games() {

  return (
    <Container id='games' maxWidth="lg">
      <Grid container spacing={2} mt={5} justifyContent="left" alignItems="flex-start">
        {gameProjects.map((item) => (
          <Grid key={item.title} xs={12} md={3}>
          <Card sx={{minWidth: 12}} variant='outlined'>
            <Link to={item.url}>
              <CardActionArea
                onClick={() => redirect(item.url)}
              >
              <CardMedia
                component="img"
                image={item.img}
                height="200"
              />
            <CardHeader title={item.title} sx={{textAlign:"center"}}/>
            
              </CardActionArea>
            </Link>
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
