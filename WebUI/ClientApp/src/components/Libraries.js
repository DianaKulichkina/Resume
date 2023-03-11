import React from 'react';
import { CardWrapper, CardHeaderWrapper } from '../Helpers/Utils';
import LibrariesGraph from './Graphs/LibrariesGraph';

export default function Libraries() {
  return(
      <CardWrapper>
        <CardHeaderWrapper title="Libraries skills" to="/aboutme" />
        <LibrariesGraph />
      </CardWrapper>
    )
  }