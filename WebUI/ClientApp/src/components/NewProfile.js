import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { blueGrey, cyan } from '@mui/material/colors';
import {Stack} from '@mui/material';
import FileDownload from '@mui/icons-material/FileDownload';
import ForwardToInbox from '@mui/icons-material/ForwardToInbox';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DownloadIcon from '@mui/icons-material/Download';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import '@fontsource/roboto/300.css';

const actions = [
  { icon: <LinkedInIcon />  , name: 'Copy'  },
  { icon: <FacebookIcon />  , name: 'Save'  },
  { icon: <InstagramIcon /> , name: 'Print' },
];

const src  = "./profile.jpg";
const src1 = "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function ProfilePc(){
  return(
    <Box>
      <Card 
        elevation={3}
        sx={{
          display: { xs: 'none', md: 'block' },
          height: { md: "500px" }, 
          width: { md: "350px" },
          borderRadius: "16px",
          zIndex: 10,
          }} 
        >
          <CardMedia 
            component="img"
            height="200px"
            image={src1}
          />
          <Avatar
            src={src}
            sx={{ width: 120, height: 120, margin: "-55px auto", border: "5px solid #fff",xs:'none' }}
          />
          <CardContent sx={{ marginTop: "55px" }}>
            <Typography variant='h5' sx={{ fontFamily:'Titillium Web', textAlign: 'center', color: cyan[900] }}>Diana Kulichkina</Typography>
            <Typography sx={{ textAlign: 'center', color: cyan[700], marginTop: "4px" }}>Front end developer</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <IconButton >
                <LinkedInIcon fontSize="small"/>
            </IconButton>
            <IconButton>
                <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton>
                <FacebookIcon fontSize="small"  />
            </IconButton>
          </CardActions>
          <Stack 
            direction="row" 
            spacing={4} 
            sx={{ 
              justifyContent: "center", 
              margin: "44px 0 0 0" 
              }} 
          >
            <Button size="small" endIcon={<FileDownload/>} sx={{ color: blueGrey[600]}}>
                Download cv
            </Button>
            <Button LinkComponent={Link} to="/contacts" size="small" endIcon={<ForwardToInbox/>} sx={{ color: blueGrey[600]}}>
                Contact me
            </Button>
          </Stack>
        </Card>
      </Box>
    );
}

export const ProfileMobile = () => {
  return(
    <Box>
      <Card 
        elevation={0}
        sx={{
          display: { xs: 'block', md: 'none' },
          minWidth: "100vw",
          borderRadius: 0,
          zIndex: 10,
          }} 
        >
          <CardMedia 
            component="img"
            height="210px"
            image={src1}
          />
          <Avatar
            src={src}
            sx={{ width: 110, height: 110, margin: "-185px auto 45px", border: "5px solid #fff", boxShadow: "8px 8px 12px 1px rgba(0, 0, 0, .5)" }}
          />
          <CardContent sx={{ marginTop: "-50px" }}>
            <Typography variant='h6' sx={{ fontFamily:'Titillium Web', textAlign: "center", color: "white" }}>Diana Kulichkina</Typography>
            <Typography variant='subtitle2' sx={{ fontFamily:'Titillium Web', textAlign: "center", color: "white" }}>Front end developer</Typography>
          </CardContent>
          <Button sx={{ position: "absolute", top: 16, left: 16, width: "60px", height: "60px", borderRadius: "50%", color: "#fff", boxShadow: "8px 8px 12px 1px rgba(0, 0, 0, .3)" }} >
            <Stack direction="column" alignItems="center">
              <ArrowCircleDownIcon />
              <Typography fontSize={8}>Resume</Typography>
            </Stack>
          </Button>
          <SpeedDial
            FabProps={{ size: "small" }}
            direction="down"
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', top: 16, right: 16 }}
            icon={<GroupAddIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Card>
      </Box>
    );
}