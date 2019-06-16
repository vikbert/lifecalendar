import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import ZoomControl from "./ZoomControl";

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
    list: {
        padding: '5px',
        marginTop: 0,
    },

}));

const getClass = (day) => {
    if (day.isCurrent) {
        return 'day currentDay';
    } else if (day.isPast) {
        return 'day pastDay';
    } else {
        return 'day';
    }
};
const ListWrapper = props => {
    const [size, setSize] = useState(5);
    const reset = () => setSize(5);
    const zoomIn = () => setSize(size + 5);
    const zoomOut = () => {
        if (size === 5) {
            return;
        }
        setSize(size - 5);
    };
    const days = props.days;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ul className={classes.list}>
                {days.map((day, index) => {
                    const dayClass = getClass(day);
                    return (
                        <div key={index} className={dayClass} style={{width: size, height: size}}/>
                    );
                })}
            </ul>
            <ZoomControl reset={reset} zoomIn={zoomIn} zoomOut={zoomOut}/>
        </div>
    );
};

ListWrapper.propTypes = {
    days: PropTypes.array.isRequired,
};

export default ListWrapper;
