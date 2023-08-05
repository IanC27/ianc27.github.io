import React from 'react';
import { Chip, Typography, Box } from '@mui/material';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'Unity', 'Game Design', 'HTML', 'CSS'];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} sx={{ margin: 1 }} />
        ))}
      </Box>
    </Box>
  );
};

export default Skills;