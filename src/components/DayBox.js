import React from 'react';
import PropTypes from 'prop-types';

const DayBox = (props) => {
    let finalClass = 'gridBox';
    if (props.day.isPast) {
        finalClass = finalClass + ' past';
    } else if (props.day.isCurrent) {
        finalClass = finalClass + ' current';
    }

    return (
        <li className={finalClass}></li>
    );
};

DayBox.propTypes = {
    day: PropTypes.object,
    size: PropTypes.number,
};

export default DayBox;
