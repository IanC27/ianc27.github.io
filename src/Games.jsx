import { Card, CardHeader, CardMedia, CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {Link} from 'react-router-dom';

import gameProjects from './assets/gameProjects';

export default function Games() {

  return (
    <Container id='games' maxWidth="lg">
      <Grid container spacing={2} my={2} justifyContent="center" alignItems="flex-start">
        {gameProjects.map((item) => (
          <Grid key={item.url} sm={6} md={3}>
          <Card sx={{minWidth: 12, borderRadius:"15pt",}} variant='outlined'>
            <Link to={item.url}>
              <CardActionArea>
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
        
      </Grid>

    </Container>
  );
}
