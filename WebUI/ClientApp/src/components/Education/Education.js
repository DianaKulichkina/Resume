import React from 'react'
import { CardWrapper, CardHeaderWrapperAvatar, CardHeaderWrapper} from '../../Helpers/Utils';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { blueGrey, cyan, teal } from '@mui/material/colors';
import { Timeline, TimelineItem, timelineItemClasses, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const title = "Education"
const title1 = "Uzhhorod National University";
const subheader = "Uzhhorod, Ukraine.";
const source = "https://www.uzhnu.edu.ua/uploads/root/logos/UzNU_logo_new2.png";
const alt = "University";


export default function Education() {
  return (
    <CardWrapper>
      <CardHeaderWrapper title={title} titleVariant="h4"/>
      <CardHeaderWrapperAvatar source={source} alt={alt} title={title1} subheader={subheader} />
      <CardContent>
        <Box>
        <Typography variant='h6' sx={{ fontFamily:'Titillium Web', color: cyan[900] }}>
                    Master’s degree in Banking.
        </Typography>
        <Typography variant='body2' sx={{ fontFamily:'Titillium Web', color: cyan[900] }}>
                    September 2006 – June 2011
        </Typography>
        <Typography variant='body1' sx={{ fontFamily:'Titillium Web', color: cyan[900], my: 2 }}>
                    Faculty of Economics. Department of Finance and Banking.
        </Typography>
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
