import { useState } from 'react';
import { Container, Typography, Box, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'

import ProjectGrid from './ProjectGrid';
import gameProjects from './gameProjects';
import otherProjects from './otherProjects';

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

    const tags = ['Javascript', 'React', 'HTML', 'Unity', 'Phaser',];

    const TagChip = styled(Chip)(() => ({
      fontWeight: 'bold',
      fontSize: '1rem',
      margin: '0.5rem' 
    }));

    const handleClick = (tag) => {
        if (activeTags.includes(tag)) {
            setActiveTags(activeTags.filter((item) => item !== tag));
        } else {
            setActiveTags(activeTags.concat([tag]))
        } 
    }

    return (
    <>
    <Container id='skills'>
      <Typography variant='h5' align='center'>
        Skills
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {tags.map((skill, index) => (
          <TagChip 
            key={index} 
            label={skill}
            color='primary'
            variant={activeTags.includes(skill) ? 'filled' : 'outlined'}
            onClick={() => handleClick(skill)}
          />
        ))}
      </Box>
    </Container>
        <ProjectGrid 
            sectionId="games" 
            projects={gameProjects} 
            title="Games"
            tags={activeTags}
        />
        <ProjectGrid 
            sectionId="other"
            projects={otherProjects}
            title="Other Projects"
            tags={activeTags}
        />
    </>



  )
}
