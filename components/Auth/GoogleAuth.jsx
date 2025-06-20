import React from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const GoogleAuth = () => {
  const handleGoogleLogin = () => {
    // Google OAuth implementation
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      startIcon={<GoogleIcon />}
      onClick={handleGoogleLogin}
      sx={{ mb: 2 }}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleAuth;