import React from 'react';
import { Chip, Typography, Box, Container } from '@mui/material';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'Unity', 'Game Design', 'HTML', 'CSS'];

  return (
    <Container id='skills'>
      <Typography variant='h5' gutterBottom align="center">
        Skills
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} sx={{ margin: 1 }} />
        ))}
      </Box>
    </Container>
  );
};

export default Skills;