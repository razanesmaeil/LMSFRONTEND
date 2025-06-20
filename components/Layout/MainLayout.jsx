import React from 'react';
import { Box } from '@mui/material';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px' }}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;