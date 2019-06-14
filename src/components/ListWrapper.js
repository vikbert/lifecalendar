import React from 'react';
import PropTypes from 'prop-types';
import DayBox from './DayBox';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  list: {
    padding: '5px',
  },
}));

const FlexWrapper = props => {
  const days = props.days;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {days.map((day, index) => <DayBox key={index} day={day}></DayBox>)}
      </ul>
    </div>
  );
};

FlexWrapper.propTypes = {
  days: PropTypes.array.isRequired,
};

export default FlexWrapper;
