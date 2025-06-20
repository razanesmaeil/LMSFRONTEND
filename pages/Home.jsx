import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" py={10}>
        <Typography variant="h2" gutterBottom>
          Welcome to the LMS
        </Typography>
        <Typography variant="h5" paragraph>
          A complete learning management system for students and instructors
        </Typography>
        <Box mt={4}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            component={Link}
            to="/login"
            sx={{ mr: 2 }}
          >
            Login
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            component={Link}
            to="/courses"
          >
            Browse Courses
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;