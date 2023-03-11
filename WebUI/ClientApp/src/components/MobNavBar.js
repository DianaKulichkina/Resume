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


export default function MobNavBar() {
  

  return (
        <Box component={Paper} sx={{ display: { xs: "flex" , md: "none", position: 'fixed', bottom: 0, left: 0, right: 0, height: "91px" }, zIndex: 5, borderRadius:"0" }}>
            <ButtonGroup orientation="horizontal" fullWidth>
                <Button LinkComponent={Link} to="/" sx={{ fontSize: '10px',color: blueGrey[600] }} variant="text" >
                    <Stack direction="column" alignItems="center" padding={2}>
                        <HomeIcon fontSize='large'/>
                        <Typography fontSize={8}>Home</Typography>
                    </Stack>
                </Button>
                <Button LinkComponent={Link} to="/aboutme" sx={{ fontSize: '10px', color: blueGrey[600]}} variant="text" >
                    <Stack direction="column" alignItems="center"padding={2}>
                        <PersonPin fontSize='large'/>
                        <Typography fontSize={8}>About</Typography>
                    </Stack>
                </Button>
                <Button LinkComponent={Link} to="/education" sx={{ fontSize: '10px', borderRadius: "0 0 16px 16px", color: blueGrey[600]}} variant="text" >
                    <Stack direction="column" alignItems="center"padding={2}>
                        <School fontSize='large'/>
                        <Typography fontSize={8}>Education</Typography>
                    </Stack>
                </Button>
                <Button LinkComponent={Link} to="/experience" sx={{ fontSize: '10px', borderRadius: "0 0 16px 16px", color: blueGrey[600]}} variant="text" >
                    <Stack direction="column" alignItems="center"padding={2}>
                        <Work fontSize='large'/>
                        <Typography fontSize={8}>Experience</Typography>
                    </Stack>
                </Button>
                <Button LinkComponent={Link} to="/contacts" sx={{ fontSize: '10px',color: blueGrey[600] }} variant="text" >
                    <Stack direction="column" alignItems="center"padding={2}>
                        <AlternateEmail fontSize='large'/>
                        <Typography fontSize={8}>Contact</Typography>
                    </Stack>
                </Button>
            </ButtonGroup>
        </Box>
    );
}




