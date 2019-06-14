import React from 'react';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';

import DayBox from './DayBox'

const FlexWrapper = props => {
  const days = props.days;
  return (
    <div style={{width: '100%'}}>
      <Box display={'flex'} flexWrap={'wrap'} alignContent={'flex-start'} p={1} m={1}>
          {days.map((day, index) => <DayBox key={index}></DayBox>)}
      </Box>
    </div>
  );
};

FlexWrapper.propTypes = {
  days: PropTypes.array.isRequired
};

export default FlexWrapper;
