import React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import { Button, Paper, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import PersonPin from '@mui/icons-material/PersonPin';
import AlternateEmail from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import Work from '@mui/icons-material/Work';
import School from '@mui/icons-material/School';



export default function NavBar() {
  return (
        <Box component={Paper} sx={{ display: { xs: "none", md: "flex" }, maxHeight: "400px", marginRight: "10px", borderRadius: "16px" }}>
            <ButtonGroup orientation="vertical">
                <Button LinkComponent={Link} to="/" sx={{ fontSize: '10px', borderRadius: "16px 16px 0 0", color: blueGrey[600] }} variant="text" >
                    <Stack direction="column" alignItems="center" padding={2}>
                        <HomeIcon/>
                        <Typography fontSize={8}>Home</Typography>
                    </Stack>
                </Button>
                <Button LinkComponent={Link} to="/aboutme" sx={{ fontSize: '10px', color: blueGrey[600]}} variant="text" >
                    <Stack direction="column" alignItems="center"padding={2}>
                        <PersonPin />
                        <Typography fontSize={8}>Aboute me</Typography>
                    </Stack>
                </Button>
                <Button LinkComponent={Link} to="/education" sx={{ fontSize: '10px', borderRadius: "0 0 16px 16px", color: blueGrey[600]}} variant="text" >
                    <Stack direction="column" alignItems="center"padding={2}>
                        <School />
                        <Typography fontSize={8}>Education</Typography>
                    </Stack>
                </Button>
                <Button LinkComponent={Link} to="/experience" sx={{ fontSize: '10px', borderRadius: "0 0 16px 16px", color: blueGrey[600]}} variant="text" >
                    <Stack direction="column" alignItems="center"padding={2}>
                        <Work />
                        <Typography fontSize={8}>Experience</Typography>
                    </Stack>
                </Button>
                <Button LinkComponent={Link} to="/contacts" sx={{ fontSize: '10px', borderRadius: "0 0 16px 16px", color: blueGrey[600]}} variant="text" >
                    <Stack direction="column" alignItems="center"padding={2}>
                        <AlternateEmail />
                        <Typography fontSize={8}>Contact</Typography>
                    </Stack>
                </Button>
            </ButtonGroup>
        </Box>
    );
}




