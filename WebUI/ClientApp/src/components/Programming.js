import * as React from 'react';
import { CardWrapper, CardHeaderWrapper } from '../Helpers/Utils';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Paper, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ProgrammingGraph from './Graphs/ProgrammingGraph';
import Close from '@mui/icons-material/Close';
import { cyan } from '@mui/material/colors';


export default function Programming() {
  return(
    <CardWrapper>
      <CardHeaderWrapper title="Programming" to="/aboutme" />
      <ProgrammingGraph />
    </CardWrapper>
  )
}