import React from 'react'
import { useState } from 'react';
import { Container, Typography, Box, Chip } from '@mui/material' 

import gameProjects from './assets/gameProjects';
import otherProjects from './assets/otherProjects';

export default function ProjectFilter() {
    const [activeTags, setActiveTags] = useState([]);

    let skillsCount = new Map();
    const projects = gameProjects.concat(otherProjects);

    projects.forEach(project => {
      project.skills.forEach(skill => {
        if (skillsCount.has(skill)) {
          skillsCount.set(skill, skillsCount.get(skill) + 1);
        } else {
          skillsCount.set(skill, 1);
        }
      });
    });

    const tags = ['React', 'JavaScript', 'Unity', 'Game Design', 'HTML', 'CSS'];


    const handleClick = (tag) => {
        if (activeTags.contains(tag)) {
            setActiveTags(activeTags.filter((item) => item !== tag));
        } else {
            setActiveTags(activeTags.concat([tag]))
        } 
    }

    return (
    <Container id='skills'>
      <Typography variant='h5' gutterBottom>
        Tags
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {tags.map((skill, index) => (
          <Chip key={index} label={skill} sx={{ margin: 1 }} onClick={() => handleClick(skill)}/>
        ))}
      </Box>
    </Container>
    
  )
}
