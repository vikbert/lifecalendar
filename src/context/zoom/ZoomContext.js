import React, {createContext, useState} from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {
    // Initial values are obtained from the props
    const {
        zoom: initialZoom,
        children,
    } = props;

    // Use State to keep the values
    const [zoom, setZoom] = useState(initialZoom);
    const resetZoom = () => {
        setZoom({...zoom, size: 5});
    };
    const zoomIn = () => {
        const newSize = zoom.size + 5;
        setZoom({...zoom, size: newSize});
    };
    const zoomOut = () => {
        if (zoom.size === 5) {
            return;
        }
        const newSize = zoom.size - 5;
        setZoom({...zoom, size: newSize});
    };
    // Make the context object:
    const appContext = {
        zoom,
        setZoom,
        zoomIn,
        zoomOut,
    };

    // pass the value in provider and return
    return <Context.Provider value={appContext}>{children}</Context.Provider>;
};

export const {Consumer} = Context;

Provider.propTypes = {
    size: PropTypes.number,
};

Provider.defaultProps = {
    zoom: {size: 30},
};
