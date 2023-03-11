import React from 'react'
import Card from '@mui/material/Card';
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
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';



const src = "./profile.jpg";
const src1 = "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function MobProfile() {
    return (
      <Card elevation={0} 
        sx={{  
            display: { xs: 'block', md: 'none', width: '100%', minHeight: '150px'},
            borderEndEndRadius: "0",
            zIndex: 10,
            }} >
          <CardMedia 
              component="img"
              height="160px"
              image={src1}
              />
              <Avatar
                  src={src}
                  sx={{ width: 120, height: 120, margin: "-55px auto", border: "5px solid #fff", xs: 'none' }}
                  />
          <CardContent sx={{ marginTop: "55px" }}>
                <Typography variant='h5' sx={{ fontFamily:'Titillium Web', textAlign: 'center', color: cyan[900] }}>Diana Kulichkina</Typography>
                <Typography sx={{ textAlign: 'center', color: cyan[700], marginTop: "4px" }}>Front end developer</Typography>
          </CardContent>
          {/* <CardActions sx={{ justifyContent: "center" }}>
                <IconButton>
                    <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton>
                    <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton>
                    <FacebookIcon fontSize="small" />
                </IconButton>
            </CardActions> */}
            {/* <Stack sx={{ justifyContent: "center", margin: "25px 0 0 0" }} direction="row" spacing={4} >
                
                    <Button size="small" endIcon={<FileDownload/>} sx={{ color: blueGrey[600]}}>
                        Download cv
                    </Button>
                    <Button LinkComponent={Link} to="/contacts" size="small" endIcon={<ForwardToInbox/>} sx={{ color: blueGrey[600]}}>
                        Contact me
                    </Button>
    
            </Stack> */}
    </Card>
    )
  }
