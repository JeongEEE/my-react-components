import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import NavigationGuard from '../components/NavigationGuard.tsx';
import {Box, Grid} from '@mui/material';

const component = () => {
  return (
    <Box>
      <Grid container p={10}>
        <div>Test Page</div>
        <NavigationGuard active={true} />
      </Grid>
    </Box>
  );
}

export default component
