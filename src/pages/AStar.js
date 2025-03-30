import React from 'react';
import { Box, Typography, Paper, Grid, Divider, Card, CardContent } from '@mui/material';
import CodeBlock from '../components/CodeBlock';
import astarVid from '../final(A_).mp4';
import astarImg from '../output_a*.png';

const AStar = () => {
  const aStarCode = `import numpy as np
from astar import AStar3D

# Environment setup
env_params = {
    'width': 100,
    'height': 100,
    'depth': 100,
    'robot_radius': 1,
    'start': [5, 5, 5],
    'goal': [95, 95, 95]
}
env = Environment(**env_params)

# Add 3D obstacles
obstacles = [
    {'center': [20, 40, 30], 'radius': 5},
    {'center': [30, 30, 50], 'radius': 9},
    {'center': [30, 70, 20], 'radius': 10},
    {'center': [50, 10, 70], 'radius': 8},
    {'center': [60, 80, 40], 'radius': 15},
    {'center': [70, 40, 60], 'radius': 12},
    {'center': [80, 20, 30], 'radius': 7}
]
for obs in obstacles:
    env.add_obstacle(Obstacle(**obs))

# A* parameters
astar_params = {
    'grid_resolution': 5  # Grid cell size for discretization
}

# Initialize A* planner
astar_planner = AStar3D(env, **astar_params)

# Run A* planning with visualization callback
path = astar_planner.plan(callback=astar_callback)`;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h2" gutterBottom>
        A* Search Algorithm
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* About A* & Implementation Side by Side */}
      <Grid container spacing={4}>
        {/* About A* */}
        <Grid item xs={12} md={4} width='40%'>
          <Paper sx={{ p: 3, height: 'auto' }}>
            <Typography variant="h3" gutterBottom>About A*</Typography>
            <Typography paragraph>
              A* is a popular pathfinding and graph traversal algorithm that is widely used in computer science due to its completeness, optimality, and optimal efficiency.
            </Typography>
            <Typography paragraph>
              It uses a best-first search and finds the least-cost path from a given initial node to one goal node. It uses a knowledge-plus-heuristic cost function to determine which path to extend next.
            </Typography>
          </Paper>
        </Grid>

        {/* Implementation (Wider with 8 columns) */}
        <Grid item xs={12} md={8} width='55%'>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h3" gutterBottom>Implementation</Typography>
              <CodeBlock code={aStarCode} language="javascript" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Video & Image Side by Side */}
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
            <Paper sx={{ p: 2 }}>
              <video width="100%" controls>
                <source src={astarVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Paper>

            <Paper sx={{ p: 2 }}>
              <img src={astarImg} alt="A* Output" style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* A* Formulas at the Bottom */}
      <Grid container>
        <Grid item xs={12} width='100%'>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h3" gutterBottom>A* Formulas</Typography>
            <Typography paragraph>
              The evaluation function:
            </Typography>
            <Typography sx={{ fontFamily: 'monospace', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
              f(n) = g(n) + h(n)
            </Typography>
            <Typography paragraph sx={{ mt: 2 }}>
              Where:
            </Typography>
            <Typography component="div">
              <ul>
                <li>f(n): Total estimated cost of path through n</li>
                <li>g(n): Cost so far to reach n</li>
                <li>h(n): Heuristic estimate of cost from n to goal</li>
              </ul>
            </Typography>
            <Typography paragraph>
              For the algorithm to be optimal, the heuristic must be admissible (never overestimates the actual cost to reach the goal).
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AStar;