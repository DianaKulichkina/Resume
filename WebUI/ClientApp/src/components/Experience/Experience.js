import React from 'react';
import { CardWrapper, CardHeaderWrapper } from '../../Helpers/Utils';
import { Typography, Box , Paper, Button, CardContent} from '@mui/material'
import Grid from '@mui/material/Grid';
import { blueGrey, cyan, red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const title = "Work Experience";
const subheader = "I am a results-driven professional with a background in banking and a passion for web development. My experience in the financial industry has honed my analytical and problem-solving skills. I am eager to apply my skills and background to the design and development of innovative and user-friendly websites.";

const WorkExperiencePC = () => {
  return(
    <Box sx={{ display: { xs: "none", md: "block" }}}>
      <CardWrapper>
        <CardHeaderWrapper title={title} subheader={subheader} />
        <CardContent>
          <Grid container spacing={0} sx={{ pt: 1, textAlign: 'center', color: blueGrey['A700'] }}>
            <Grid item xs={4}>
              <Button LinkComponent={Link} to="/globusBank" sx={{ fontFamily: "Titillium Web", fontSize: "11px", color: cyan[900] }}>
                <Box>
                  <Avatar 
                    variant={"rounded"} 
                    alt="Globus" 
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkH-016NEd5pRjEcAJjFflplMZHTbIxH1bAnPN_KCVCOup6vtJyo1fC9sWzFfVBuwdn4&usqp=CAU'} 
                    sx={{
                      width  : 40,
                      height : 40,
                      margin: "auto",
                    }}
                  />
                  <Typography variant="inherit" sx={{ fontFamily:'Titillium Web', color: cyan[900], mt: 1 }}>Globus Bank</Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button LinkComponent={Link} to="/alfaBank" sx={{ fontFamily: "Titillium Web", fontSize: "11px", color: cyan[900] }}>
                <Box>
                  <Avatar 
                    variant={"rounded"} 
                    alt="Alfa" 
                    src={'https://alfabank.st/media/footer-alfa-logo_1025x1025_common_31-07-2019.svg'} 
                    sx={{
                      width  : 40,
                      height : 40,
                      margin: "auto",
                    }}
                  />
                  <Typography variant="inherit" sx={{ fontFamily:'Titillium Web', color: cyan[900], mt: 1 }}>Alfa Bank</Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button LinkComponent={Link} to="/aBank" sx={{ fontFamily: "Titillium Web", fontSize: "11px", color: cyan[900] }}>
                <Box>
                  <Avatar 
                    variant={"rounded"} 
                    alt="Alfa" 
                    //src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtUgourDsLIntLNt6L9cbfb_ZrjqHd-q58g&usqp=CAU'} 
                    src={'https://win10storeapp.com/wp-content/uploads/2019/10/24-App-for-Windows-10-8-7-Latest-Version.png'} 
                    sx={{
                      width  : 40,
                      height : 40,
                      objectFit: "",
                      margin: "auto",
                    }}
                  />
                  <Typography variant="inherit" sx={{ fontFamily:'Titillium Web', color: cyan[900], mt: 1 }}>A-Bank</Typography>
                </Box>
              </Button>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" sx={{ fontFamily:'Titillium Web', color: cyan[900], mt: 0 }}><span style={{ color: "red" }}>*</span> Click on icon to see more details.</Typography>
        </CardContent>
      </CardWrapper>
    </Box>
  );
}

const WorkExperienceMobile = () => {
  return(
    <Box sx={{ display: { xs: "block", md: "none" }}}>
      <CardWrapper>
        <CardHeaderWrapper title={title} subheader={subheader} titleVariant="h3" />
        <CardContent>
          <Typography variant="subtitle2" sx={{ fontFamily:'Titillium Web', color: cyan[700], mb: 5 }}><span style={{ color: "red" }}>*</span> Click on icon to see more details.</Typography>
          <Grid container spacing={0} sx={{ pt: 1, textAlign: 'center', color: blueGrey['A700'] }}>
            <Grid item xs={4}>
              <Button LinkComponent={Link} to="/globusBank" sx={{ fontFamily: "Titillium Web", fontSize: "11px", color: cyan[900] }}>
                <Box>
                  <Avatar 
                    variant={"rounded"} 
                    alt="Globus" 
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkH-016NEd5pRjEcAJjFflplMZHTbIxH1bAnPN_KCVCOup6vtJyo1fC9sWzFfVBuwdn4&usqp=CAU'} 
                    sx={{
                      width  : 40,
                      height : 40,
                      margin: "auto",
                    }}
                  />
                  <Typography variant="inherit" sx={{ fontFamily:'Titillium Web', color: cyan[900], mt: 1 }}>Globus Bank</Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button LinkComponent={Link} to="/alfaBank" sx={{ fontFamily: "Titillium Web", fontSize: "11px", color: cyan[900] }}>
                <Box>
                  <Avatar 
                    variant={"rounded"} 
                    alt="Alfa" 
                    src={'https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg'} 
                    sx={{
                      width  : 40,
                      height : 40,
                      margin: "auto",
                    }}
                  />
                  <Typography variant="inherit" sx={{ fontFamily:'Titillium Web', color: cyan[900], mt: 1 }}>Alfa Bank</Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button LinkComponent={Link} to="/aBank" sx={{ fontFamily: "Titillium Web", fontSize: "11px", color: cyan[900] }}>
                <Box>
                  <Avatar 
                    variant={"rounded"} 
                    alt="Alfa" 
                    //src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtUgourDsLIntLNt6L9cbfb_ZrjqHd-q58g&usqp=CAU'} 
                    src={'https://win10storeapp.com/wp-content/uploads/2019/10/24-App-for-Windows-10-8-7-Latest-Version.png'} 
                    sx={{
                      width  : 40,
                      height : 40,
                      objectFit: "",
                      margin: "auto",
                    }}
                  />
                  <Typography variant="inherit" sx={{ fontFamily:'Titillium Web', color: cyan[900], mt: 1 }}>A-Bank</Typography>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardWrapper>
    </Box>
  );
}

export default function Work() {
  return (
    <>
      <WorkExperiencePC />
      <WorkExperienceMobile />
    </>
  )
}




//   }}>
//       <Typography variant='h5' sx={{ color:cyan[900]}}></Typography>
//       <Grid xs={6}>
//           <Box sx={{ display: "flex" }}>
              
//           <Typography variant='h6'>Commercial Bank Globus</Typography>
//           </Box>
          
//       </Grid>
//          <Grid xs={12}>
//          <Typography paddingLeft={4}>Position: Loan Specialist</Typography>
//          </Grid>
//          <Grid xs={12}>
//          <Typography paddingLeft={4}>Jan 2015 - Aug 2015</Typography>
//          </Grid>
//          <Grid xs={12}>
//          <Typography paddingLeft={1}><LocationOn/>Uzhhorod, Ukraine.</Typography>
//          </Grid>
//          <Grid> <Typography>Analyzing applicants financial status to determine feasibility of
//                   granting loans</Typography>
//                    <Typography>Submitting applications to credit analysts for verification and
//                   recommendation</Typography>
//                    <Typography>Controlling of loan payments, preparation of daily reports</Typography>

//           </Grid>
  
//         <Grid item xs={12} sx={{textAlign:'end', paddingRight:'10px'}}>
//         <Button  sx={{ color:cyan[900], paddingTop: '20px',}} LinkComponent={Link} to="/aboutme"><Close/></Button>
//     </Grid>
//     </Box>