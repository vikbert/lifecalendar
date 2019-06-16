import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import AddIcon from "@material-ui/icons/Add";
import UndoIcon from "@material-ui/icons/Undo";
import RemoveIcon from "@material-ui/icons/Remove";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

const buttonSize = 25;
const useStyles = makeStyles(theme => ({
    toolbar: {
        position: "fixed",
        borderRadius: "2px",
        padding: "1px",
        top: theme.spacing(8),
        left: '22px',
    },
    button: {
        width: buttonSize,
        height: buttonSize,
        maxWidth: buttonSize,
        maxHeight: buttonSize,
        backgroundColor: '#f13c20',
        color: '#fff',
    },
    buttonBox: {
        marginTop: 10,
        borderRadius: "2px",
    },
}));

const ZoomControl = (props) => {
    const classes = useStyles();
    const {reset, zoomIn, zoomOut} = props;

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <Grid container direction="column">
                    <Box boxShadow={4} className={classes.buttonBox}>
                        <ButtonBase
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => reset()}
                        >
                            <UndoIcon style={{fontSize: 14}}/>
                        </ButtonBase>
                    </Box>
                    <Box boxShadow={4} className={classes.buttonBox}>
                        <ButtonBase
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => zoomIn()}
                        >
                            <AddIcon style={{fontSize: 14}}/>
                        </ButtonBase>
                        <Divider/>
                        <ButtonBase
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => zoomOut()}
                        >
                            <RemoveIcon style={{fontSize: 14}}/>
                        </ButtonBase>
                    </Box>
                </Grid>
            </div>
        </div>
    );
};

ZoomControl.propTypes = {
    reset: PropTypes.func,
    zoomIn: PropTypes.func,
    zoomOut: PropTypes.func,
};

export default ZoomControl;
