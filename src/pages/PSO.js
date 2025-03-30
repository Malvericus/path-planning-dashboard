import React from 'react';
import { Box, Typography, Paper, Grid, Divider, Card, CardContent } from '@mui/material';
import CodeBlock from '../components/CodeBlock';
import psoVid from '../final(PSO).mp4';
import psoImg from '../output_pso.png';

const PSO = () => {
  const psoCode = `import path_planning as pp
import numpy as np
from pso import PSO

# Environment setup
env_params = {
    'width': 100,
    'height': 100,
    'robot_radius': 1,
    'start': [5,5],
    'goal': [95,95],
}
env = pp.Environment(**env_params)

# Add obstacles
obstacles = [
    {'center': [20, 40], 'radius': 5},
    {'center': [30, 30], 'radius': 9},
    {'center': [30, 70], 'radius': 10},
    {'center': [50, 10], 'radius': 8},
    {'center': [60, 80], 'radius': 15},
    {'center': [70, 40], 'radius': 12},
    {'center': [80, 20], 'radius': 7},
]
for obs in obstacles:
    env.add_obstacle(pp.Obstacle(**obs))

# Path configuration
num_control_points = 3
resolution = 50  # Number of points to render the path

# Cost function setup
cost_function = pp.EnvCostFunction(env, num_control_points, resolution)

# Optimization problem definition
problem = {
    'num_var': 2*num_control_points,  # x,y for each control point
    'var_min': 0,  # Minimum coordinate value
    'var_max': 1,  # Maximum coordinate value (normalized)
    'cost_function': cost_function,
}

# PSO parameters
pso_params = {
    'max_iter': 100,    # Maximum iterations
    'pop_size': 100,    # Population size
    'c1': 2,           # Cognitive coefficient
    'c2': 1,           # Social coefficient
    'w': 0.8,          # Inertia weight
    'wdamp': 1,        # Inertia weight damping
    'resetting': 25,    # Reset particles after this many iterations
}

# Run PSO optimization
bestsol, pop = PSO(problem, **pso_params)`;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h2" gutterBottom>
        Particle Swarm Optimization
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* About PSO & Implementation Side by Side */}
      <Grid container spacing={4}>
        {/* About PSO */}
        <Grid item xs={12} md={6} width='40%'>
          <Paper sx={{ p: 3, height: 'auto' }}>
            <Typography variant="h3" gutterBottom>About PSO</Typography>
            <Typography paragraph>
              Particle Swarm Optimization is a population-based stochastic optimization technique inspired by social behavior of bird flocking or fish schooling.
            </Typography>
            <Typography paragraph>
              PSO works by having a population (swarm) of candidate solutions (particles). These particles move around in the search space according to simple mathematical formulae over the particle's position and velocity.
            </Typography>
          </Paper>
        </Grid>

        {/* Implementation */}
        <Grid item xs={12} md={6} width='55%'>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h3" gutterBottom>Implementation</Typography>
              <Box sx={{ height: '400px', overflow: 'hidden' }}>
                <CodeBlock code={psoCode} language="python" />
              </Box>
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
                <source src={psoVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Paper>

            <Paper sx={{ p: 2 }}>
              <img src={psoImg} alt="RRT Output" style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* PSO Formulas at the Bottom */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h3" gutterBottom>PSO Formulas</Typography>
        <Typography paragraph>The velocity update equation:</Typography>
        <Typography sx={{ fontFamily: 'monospace', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
          v_i(t+1) = w * v_i(t) + c1 * r1 * (pbest_i - x_i(t)) + c2 * r2 * (gbest - x_i(t))
        </Typography>
        <Typography paragraph sx={{ mt: 2 }}>The position update equation:</Typography>
        <Typography sx={{ fontFamily: 'monospace', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
          x_i(t+1) = x_i(t) + v_i(t+1)
        </Typography>
        <Typography paragraph sx={{ mt: 2 }}>Where:</Typography>
        <Typography component="div">
          <ul>
            <li>v_i: Velocity of particle i</li>
            <li>x_i: Position of particle i</li>
            <li>w: Inertia weight</li>
            <li>c1, c2: Acceleration coefficients</li>
            <li>r1, r2: Random numbers between 0 and 1</li>
            <li>pbest_i: Best position found by particle i</li>
            <li>gbest: Best position found by the swarm</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default PSO;