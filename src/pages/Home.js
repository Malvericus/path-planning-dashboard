// src/pages/Home.js
import React from 'react';
import { Typography, Paper, Box, Card, CardMedia } from '@mui/material';
import warehouse from '../warehouse.jpg';
const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Introduction Section */}
      <Paper sx={{ 
        p: 4, 
        borderRadius: 2, 
        mb: 4,
        backgroundColor: 'background.paper'
      }}>
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

      <Card sx={{ 
        mb: 4, 
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden'
      }}>
        <CardMedia
          component="img"
          height="500"
          image={warehouse}
          alt="Path planning algorithms comparison"
          sx={{
            objectFit: 'cover',
            width: '100%',
            maxHeight: '500px'
          }}
        />
        <Box sx={{ 
          p: 2, 
          backgroundColor: 'background.default',
          borderTop: '1px solid',
          borderColor: 'divider'
        }}>
          <Typography variant="caption" color="text.secondary">
            Amazon's warehouse in Michigan
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Home;