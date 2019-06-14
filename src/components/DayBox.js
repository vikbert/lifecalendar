import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  box: {
    height: '5px',
    width: '5px',
    float: 'left',
    background: '#CCC',
    listStyle: 'none',
    margin: '1px',
  },
  past: {
    background: '#FB9B38',
  },
  current: {
    background: '#FB9B38',

  }
}));

const DayBox = (props) => {
  const classes = useStyles();
  let finalClass = classes.box;
  if (props.day.isPast) {
    finalClass = finalClass + ' ' + classes.past;
  }
  if (props.day.isCurrent) {
    finalClass = finalClass + ' ' + classes.current;
  }


  return (
    <li className={finalClass}></li>
  );
};

DayBox.propTypes = {
  day: PropTypes.object,
};

export default DayBox;
