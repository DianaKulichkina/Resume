import React from 'react';
import { CardWrapper, CardHeaderWrapper } from '../../Helpers/Utils';
import { Box, Grid, TextField, Button, CardContent } from '@mui/material'
import { cyan } from '@mui/material/colors';


const title = "Get In Touch";
const subheader = "Please complete the contact form below to send your message or contact me by email: diana.marhita@gmail.com."


const  ContactPC = () => {
  return(
    <Box sx={{ display: { xs: "none", md: "block" }}}>
      <CardWrapper>
        <CardHeaderWrapper title={title} subheader={subheader} />
        <CardContent component="form">
          <Grid container spacing={1}>
              <Grid xs={12} sm={6} item >
                <TextField label='First Name' size='small' placeholder='Enter First Name' fullWidth required/>
              </Grid>
              <Grid xs={12} sm={6} item >
                <TextField label='Last Name' size='small' placeholder='Enter Last Name' fullWidth required/>
              </Grid>
              <Grid xs={12} item >
                <TextField type='email' label='Email' size='small' placeholder='Enter email' fullWidth required/>
              </Grid>
              <Grid xs={12} item >
                <TextField multiline rows={1} label='Message' size='small' placeholder='Type your message here' fullWidth required/>
              </Grid>
              <Grid xs={12} item >
                <Button type='submit' size='small' variant='contained' sx={{ background: cyan[700], fontFamily:'Titillium Web', mt: 1 }} fullWidth>Submit</Button>
              </Grid>
            </Grid>
        </CardContent>
      </CardWrapper>
    </Box>
  )
}

const ContactMob = () =>{
  return(
    <Box sx={{ display: { xs: "block", md: "none" }}}>
      <CardWrapper>
        <CardHeaderWrapper title={title} subheader={subheader} titleVariant="h3" />
        <CardContent component="form">
          <Grid container spacing={1}>
              <Grid xs={12} sm={6} item >
                <TextField label='First Name' size='small' placeholder='Enter First Name' fullWidth required/>
              </Grid>
              <Grid xs={12} sm={6} item >
                <TextField label='Last Name' size='small' placeholder='Enter Last Name' fullWidth required/>
              </Grid>
              <Grid xs={12} item >
                <TextField type='email' label='Email' size='small' placeholder='Enter email' fullWidth required/>
              </Grid>
              <Grid xs={12} item >
                <TextField multiline rows={6} label='Message' size='small' placeholder='Type your message here' fullWidth required/>
              </Grid>
              <Grid xs={12} item >
                <Button type='submit' size='large' variant='contained' sx={{ background: cyan[700], fontFamily:'Titillium Web', mt: 1 }} fullWidth>Submit</Button>
              </Grid>
            </Grid>
        </CardContent>
      </CardWrapper>
    </Box>
  )
}

export default function Contact() {
  return (
    <>
      <ContactPC/>
      <ContactMob/>
    </>
  )
}
