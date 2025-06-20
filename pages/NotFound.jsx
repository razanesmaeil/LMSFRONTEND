import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" py={10}>
        <Typography variant="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" paragraph>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/"
          sx={{ mt: 3 }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;