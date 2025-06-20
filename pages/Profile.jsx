import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
        {user ? (
          <Box>
            <Typography variant="h6">Name: {user.firstName} {user.lastName}</Typography>
            <Typography variant="h6">Email: {user.email}</Typography>
            <Typography variant="h6">Role: {user.role}</Typography>
          </Box>
        ) : (
          <Typography>Loading profile...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Profile;