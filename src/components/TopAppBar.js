import React from 'react';
import PropTypes from 'prop-types';
import {useTheme, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    minHeight: '10px',
  },
  grow: {
    flexGrow: 1,
    fontFamily: 'Alfa Slab One',
    textShadow: '0 1px 0 #5d0a6b',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function TopAppBar(props) {
  const {classes} = props;
  const theme = useTheme();
  const matchedNormalScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" color="inherit" className={classes.grow} align={'center'}>
            {matchedNormalScreen ? 'LiveGrid' : 'Lg'}
          </Typography>
          <IconButton color="inherit" target="_blank" href="https://github.com/vikbert/livegrid">
            <FaceIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopAppBar);
