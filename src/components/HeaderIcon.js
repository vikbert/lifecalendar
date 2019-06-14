import React from 'react';
import Fab from '@material-ui/core/Fab';
import FaceIcon from '@material-ui/icons/Face';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const HeaderIcon = () => {
  const classes = useStyles();
  return (
    <Fab className={classes.fab} color={'primary'}>
      <FaceIcon/>
    </Fab>
  );
};

HeaderIcon.propTypes = {};

export default HeaderIcon;
