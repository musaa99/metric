import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { StyledMainMetrics, Header } from './style'

import ResolutionTabs from '../ResolutionTabs';
import StatsBlock from '../StatsBlock';

const Tabs = () => {
  return (
    <StyledMainMetrics>
      <Header> Main metrics </Header>
      <ResolutionTabs />
      <StatsBlock />
    </StyledMainMetrics>
  )
}

export default Tabs;