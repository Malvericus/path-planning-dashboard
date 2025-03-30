// src/pages/Home.js
import React from 'react';
import { Typography, Paper } from '@mui/material';

const Home = () => {
  return (
    <Paper sx={{ p: 4, borderRadius: 2 }}>
      <Typography variant="h1" gutterBottom>
        Path Planning and Obstacle Avoidance Using Various AI Algorithms
      </Typography>
      <Typography variant="body1" paragraph>
        This dashboard provides information and visualizations about different path planning algorithms including Particle Swarm Optimization (PSO), Rapidly-exploring Random Trees (RRT), and A* Search Algorithm.
      </Typography>
      <Typography variant="body1" paragraph>
        Use the sidebar to navigate to each algorithm's section where you'll find explanations, formulas, implementation details, and visual demonstrations.
      </Typography>
    </Paper>
  );
};

export default Home;