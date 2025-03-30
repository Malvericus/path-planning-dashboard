// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, SettingsEthernet, Polyline, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box sx={{
      width: 250,
      flexShrink: 0,
      height: '100vh',
      position: 'sticky',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        p: 2,
      }}>
        {[
          { path: "/", icon: <Home />, text: "Home" },
          { path: "/pso", icon: <SettingsEthernet />, text: "PSO" },
          { path: "/rrt", icon: <Polyline />, text: "RRT" },
          { path: "/a-star", icon: <Star />, text: "A*" }
        ].map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path}
              sx={{
                bgcolor: '#1C1C1C',
                borderRadius: '10px',
                height: '56px',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                  transform: 'scale(1.02)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  color: 'white',
                  fontWeight: 'medium',
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;