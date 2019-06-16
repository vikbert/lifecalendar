import React from 'react';
import Fab from '@material-ui/core/Fab';
import FaceIcon from '@material-ui/icons/Face';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const HeaderIcon = () => {
    const classes = useStyles();
    return (
        <Fab className={classes.fab} color={'primary'} size={'small'}>
            <FaceIcon/>
        </Fab>
    );
};

HeaderIcon.propTypes = {};

export default HeaderIcon;
