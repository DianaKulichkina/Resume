import React from 'react'
import { CardWrapper, CardHeaderWrapper } from '../../Helpers/Utils';
import {CardContent} from '@mui/material';
import { Typography, Box , Paper, Button} from '@mui/material'
import Grid from '@mui/material/Grid';
import { blueGrey, cyan } from '@mui/material/colors';
import GTranslate from '@mui/icons-material/GTranslate';
import Psychology from '@mui/icons-material/Psychology';
import { Link } from 'react-router-dom';
import Code from '@mui/icons-material/Code';
import List from '@mui/icons-material/List';

const title = "About Me";
const subheader = "I'm from Ukraine. I moved to Lisbon, Portugal in 2016. I am looking to start my professional journey in the IT industry. Thrilled to be at this stage of new professional growth. I am ambitious and passionate about learning new technologies, bringing ideas to life and working with dedicated teams to build efficient and robust applications suited to the user's needs.";

const AboutMePc = () => {
  return(
    <Box sx={{ display: { xs: "none", md: "block" }}}>
      <CardWrapper>
        <CardHeaderWrapper title={title} subheader={subheader} />
        <CardContent>
          <Grid container spacing={1} sx={{paddingTop: '20px', textAlign: 'left', color:  blueGrey['A700'] }}>
            <Grid item xs={6}>
            <Button endIcon={<GTranslate/>} LinkComponent={Link} to="/languages" sx={{ fontSize: '12px',color: cyan[900] }}>Languages</Button>
            </Grid>
            <Grid item xs={6}>
              <Button endIcon={<Code />} LinkComponent={Link} to="/programming" sx={{ fontSize: '12px',color: cyan[900] }}>Programming</Button>
            </Grid>
            <Grid item xs={6}>
              <Button endIcon={<Psychology />} LinkComponent={Link} to="/libraries" sx={{ fontSize: '12px',color: cyan[900] }}>Libraries</Button>
            </Grid>
            <Grid item xs={6}>
              <Button endIcon={<List />} LinkComponent={Link} to="/other" sx={{ fontSize: '12px',color: cyan[900] }}>Other</Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardWrapper>
    </Box>
  )
}

const AboutMeMobile = () => {
  return(
    <Box sx={{ display: { xs: "block", md: "none" }}}>
      <CardWrapper>
        <CardHeaderWrapper title={title} titleVariant="h3" />
        <CardContent>
          <Typography variant='h7' sx={{color: cyan[700]}}>I'm from Ukraine. I moved to Lisbon, Portugal in 2016. 
            I am looking to start my professional journey in the IT industry. 
            Thrilled to be at this stage of new professional growth. 
            I am ambitious and passionate about learning new technologies, bringing ideas to life and working with dedicated teams to build efficient and robust applications suited to the user's needs.
          </Typography>
          <Grid container spacing={4} sx={{paddingTop: '50px', textAlign: 'left', color:  blueGrey['A700'] }}>
            <Grid item xs={6}>
            <Button endIcon={<GTranslate/>} LinkComponent={Link} to="/languages" sx={{ fontSize: '12px',color: cyan[900] }}>Languages</Button>
            </Grid>
            <Grid item xs={6}>
              <Button endIcon={<Code />} LinkComponent={Link} to="/programming" sx={{ fontSize: '12px',color: cyan[900] }}>Programming</Button>
            </Grid>
            <Grid item xs={6}>
              <Button endIcon={<Psychology />} LinkComponent={Link} to="/libraries" sx={{ fontSize: '12px',color: cyan[900] }}>Libraries</Button>
            </Grid>
            <Grid item xs={6}>
              <Button endIcon={<List />} LinkComponent={Link} to="/other" sx={{ fontSize: '12px',color: cyan[900] }}>Other</Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardWrapper>
    </Box>
  )
}

export default function AboutMe() {
  return (
    <>
      <AboutMePc />
      <AboutMeMobile />
    </>
  )
}