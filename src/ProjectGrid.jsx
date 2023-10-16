import React from "react";
import { Card, CardContent, Typography, CardHeader, CardMedia, CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {Link} from 'react-router-dom';


export default function ProjectGrid(props) {
    
    const {sectionId, projects, title} = props;

    return (
      <Container id={sectionId} maxWidth="lg">
        <Typography variant='h5' gutterBottom>
            {title}
        </Typography>
        <Grid container spacing={2} my={2} justifyContent="center" alignItems="flex-start">
          {projects.map((item) => (
            <Grid key={item.title} sm={6} md={3}>
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
  