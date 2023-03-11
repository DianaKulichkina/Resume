import React from 'react';
import { CardWrapper, CardHeaderWrapper } from '../../Helpers/Utils';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';
import { ProfileMobile } from '../NewProfile';
import { Box } from '@mui/system';
//import './custom.css';

const title = "Welcome to my online resume!";
const subheader = "I'm thrilled that you're here to learn more about my professional background and accomplishments. I invite you to take a look around and discover why I'm the perfect candidate for your next opportunity.";

const cardWrapperSx = {
  width     : "100%", 
  minHeight : "calc(100vh - 91px - 210px)", 
  px        : 5, 
};

const HomePc = () => {
  return(
    <Box sx={{ display: { xs: "none", md: "block" }}} >
      <CardWrapper>
        <CardHeaderWrapper title={title} subheader={subheader} />
        <CardContent>
          <Typography variant='body1' sx={{ fontFamily:'Titillium Web', color: cyan[700], mb: 3 }}>Thanks for visiting!</Typography>
          <Typography variant='h4' sx={{ fontFamily:'Mrs Saint Delafield', color: cyan[700], mt: 6 }}>Diana Kulichkina...</Typography>
        </CardContent>
      </CardWrapper>
    </Box>
  );
}

const HomeMobile = () => {
  return(
    <Box sx={{ display: { xs: "block", md: "none" }}} >
      <CardWrapper sx={cardWrapperSx}>
        <CardHeaderWrapper title={title} subheader={subheader} titleVariant="h3" />
        <CardContent>
          <Typography variant='body1' sx={{ fontFamily:'Titillium Web', color: cyan[700], mb: 3 }}>Thanks for visiting!</Typography>
          <Typography variant='h4' sx={{ fontFamily:'Mrs Saint Delafield', color: cyan[700], mt: 6 }}>Diana Kulichkina...</Typography>
        </CardContent>
      </CardWrapper>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <ProfileMobile />
      <HomePc />
      <HomeMobile />
    </>
  );
}