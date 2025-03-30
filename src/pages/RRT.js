import React from 'react';
import { Box, Typography, Paper, Grid, Divider, Card, CardContent } from '@mui/material';
import CodeBlock from '../components/CodeBlock';
import rrtVid from '../final(RRT).mp4';
import rrtImg from '../output_rrt.png';

const RRT = () => {
  const rrtCode = `import numpy as np
from rrt import RRT

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

# RRT parameters
rrt_params = {
    'max_nodes': 2000,      # Maximum nodes to expand
    'step_size': 7,         # Expansion step size
    'goal_sample_rate': 0.1 # Probability to sample goal directly
}

# Initialize RRT planner
rrt_planner = RRT(env, **rrt_params)

# Run RRT planning with visualization callback
path = rrt_planner.plan(callback=rrt_callback)`;


  return (
    <Box sx={{ flexGrow: 1}}>
      <Typography variant="h2" gutterBottom>
        Rapidly-exploring Random Tree
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* About RRT & Implementation Side by Side */}
      <Grid container spacing={4}>
        {/* About RRT */}
        <Grid item xs={12} md={6} width='40%' >
          <Paper sx={{ p: 3, height: 'auto'}}>
            <Typography variant="h3" gutterBottom>About RRT</Typography>
            <Typography paragraph>
              Rapidly-exploring Random Tree is an algorithm designed to efficiently search nonconvex, high-dimensional spaces by randomly building a space-filling tree.
            </Typography>
            <Typography paragraph>
              The tree is constructed incrementally from samples drawn randomly from the search space and is inherently biased to grow towards large unsearched areas of the problem.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} width='55%'>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h3" gutterBottom>Implementation</Typography>
              <CodeBlock code={rrtCode} language="javascript" />
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
                <source src={rrtVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Paper>

            <Paper sx={{ p: 2 }}>
              <img src={rrtImg} alt="RRT Output" style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* RRT Algorithm at the Bottom */}
      <Grid container>
        <Grid item xs={12} width='100%'>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h3" gutterBottom>RRT Algorithm</Typography>
            <Typography paragraph>The basic RRT algorithm:</Typography>
            <Typography component="div">
              <ol>
                <li>Initialize tree with start node</li>
                <li>Sample a random point in the space</li>
                <li>Find the nearest node in the tree to the random point</li>
                <li>Extend from the nearest node towards the random point</li>
                <li>If the path is obstacle-free, add the new point to the tree</li>
                <li>Repeat until goal is reached or maximum iterations</li>
              </ol>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RRT;