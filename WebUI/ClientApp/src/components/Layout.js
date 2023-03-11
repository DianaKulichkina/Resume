import { CssBaseline } from '@mui/material'
import { Container, Box } from '@mui/system'
import React from 'react'
import NavBar from './NavBar';
import Profile from './NewProfile';
import MobNavBar from './MobNavBar';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ px: { xs: 0, md: 5} }} disableGutters>
        <Box sx={{ 
          bgcolor: '#cfe8fc', 
          height: { xs: "auto", md: '100vh' }, 
          display: 'flex', 
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center", 
          justifyContent:"center",
          overflowY: { xs: "scroll", md: "auto" } 
          }}>
            <NavBar />
            <MobNavBar />
            <Profile />
            {children}
        </Box>
      </Container>
    </React.Fragment>
  )
}
