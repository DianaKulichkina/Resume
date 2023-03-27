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
import { CardWrapper , CardHeaderWrapper, CardHeaderWrapperAvatar} from '../../Helpers/Utils';

const title = "A-Bank";
const subheader = "Mar 2012 - Oct 2012";
const source = "https://win10storeapp.com/wp-content/uploads/2019/10/24-App-for-Windows-10-8-7-Latest-Version.png";
const alt = "A-Bank icon";

export default function ABank() {

    
  return (
    <Card sx={{ 
        width: { xs: "100%", md: 450 }, 
        height: { xs: "650px", md:"450px" },
        boxSizing: "border-box", 
        padding: 5, 
        borderRadius: {xs: '0', md: '0px 16px 16px 0px'},
        }}>
      <CardHeaderWrapperAvatar source={source} alt={alt} title={title} subheader={subheader} to={"/experience"} />
      <CardContent>
    <Typography variant="subtitle1" sx={{ml:2,fontFamily:'Titillium Web', color: cyan[700]}}>
        Position: Loan Specialist
        </Typography>
        <Box m={2} >
                <Typography variant="body2" sx={{fontFamily:'Titillium Web', color: cyan[700]}}>
                1. Analyzing applicants financial status to determine feasibility of granting loans.
                </Typography>
                <Typography variant="body2" sx={{fontFamily:'Titillium Web', color: cyan[700]}}>
                2. Analyzing applicants financial status to determine feasibility of granting loans.Submitting applications to credit analysts for verification and recommendation.
                </Typography>
                <Typography variant="body2" sx={{fontFamily:'Titillium Web', color: cyan[700]}}>
                3. Controlling of loan payments, preparation of daily reports.
                </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}