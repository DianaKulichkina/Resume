import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { blueGrey, cyan } from '@mui/material/colors';


export default function AlfaBank() {

    
  return (
    <Card sx={{ 
        width: { xs: "100%", md: 450 }, 
        height: { xs: "650px", md:"450px" },
        boxSizing: "border-box", 
        padding: 5, 
        borderRadius: {xs: '0', md: '0px 16px 16px 0px'},
        }}>
      <CardHeader sx={{textColor: cyan[900]}}
        avatar={
            <Avatar variant={"rounded"} alt="Alfa Bank" src={'https://pnptc-media.s3.amazonaws.com/images/alfa-additional-logo_en_red.max-500x500.png'} style={{
                width: 145,
                height: 40,
              }}/>
        }
        action={
          <IconButton LinkComponent={Link} to="/work" aria-label="close"sx={{color: cyan[900]}}>
            <CloseIcon />
          </IconButton>
        }
        title="Alfa Bank "
        subheader="Apr 2014 - Jan 2015"
      />
      <CardContent>
    <Typography variant="subtitle1" color="text.secondary" align='center' sx={{color: cyan[900]}}>
        Position: Loan Specialist
        </Typography>
        <Box m={2} >
                <Typography variant="body1" color="text.secondary" sx={{color: cyan[900]}}>
                1. Analyzing applicants financial status to determine feasibility of granting loans.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{color: cyan[900]}}>
                2. Analyzing applicants financial status to determine feasibility of granting loans.Submitting applications to credit analysts for verification and recommendation.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{color: cyan[900]}}>
                3. Controlling of loan payments, preparation of daily reports.
                </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
