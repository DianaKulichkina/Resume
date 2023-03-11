import React from 'react';
import { CardWrapper, CardHeaderWrapper } from '../Helpers/Utils';
import LanguagesGraph from './Graphs/LanguagesGraph'

export default function Languages() {
  return(
    <CardWrapper>
      <CardHeaderWrapper title="Languages" to="/aboutme" />
      <LanguagesGraph />
    </CardWrapper>
  )
}