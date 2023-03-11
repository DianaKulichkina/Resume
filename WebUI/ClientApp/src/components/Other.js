import * as React from 'react';
import { CardWrapper, CardHeaderWrapper } from '../Helpers/Utils';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Paper, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import OtherGraph from './Graphs/OtherGraph'
import Close from '@mui/icons-material/Close';
import { cyan } from '@mui/material/colors';

export default function Other() {
  return(
    <CardWrapper>
      <CardHeaderWrapper title="Other Skills" to="/aboutme" />
      <OtherGraph/>
    </CardWrapper>
  )
}