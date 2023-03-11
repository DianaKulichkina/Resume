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
            <Timeline 
              position='right' sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex    : 0,
                  padding : 0,
                  },
                  my: 0,
                }}
                >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ background: blueGrey[300] }} />
                  <TimelineConnector sx={{ background: blueGrey[300] }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant='body1' sx={{ fontFamily:'Titillium Web', color: cyan[900] }}>
                    Master’s degree in Banking.
                  </Typography>
                  <Typography variant='caption' sx={{ fontFamily:'Titillium Web', color: cyan[900] }}>
                    September 2010 – June 2011
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily:'Titillium Web', color: cyan[900], my: 2 }}>
                    Faculty of Economics. Department of Finance and Banking.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ background: blueGrey[300] }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant='body1' sx={{ fontFamily:'Titillium Web', color: cyan[900] }}>
                    Bachelor's degree in Banking.
                  </Typography>
                  <Typography variant='caption' sx={{ fontFamily:'Titillium Web', color: cyan[900] }}>
                    September 2006 – June 2010
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily:'Titillium Web', color: cyan[900], my: 2 }}>
                    Faculty of Economics. Department of Finance and Banking.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
