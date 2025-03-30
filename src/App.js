// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PSO from './pages/PSO';
import RRT from './pages/RRT';
import AStar from './pages/AStar';
import bgImage from './b1.jpg';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#001F3F', 
    },
    secondary: {
      main: '#3E2A47', 
    },
    background: {
      default: '#1C1C1C', // Dark grey for components
      paper: '#1C1C1C',   // Dark grey for paper components
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${bgImage})`,
          minHeight: '100vh',
          margin: 0,
          backgroundAttachment: 'fixed',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pso" element={<PSO />} />
              <Route path="/rrt" element={<RRT />} />
              <Route path="/a-star" element={<AStar />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;