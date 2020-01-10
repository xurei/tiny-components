import React from 'react'; //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

function Join(props) {
    const out = [];
    props.children.forEach((child) => {
        out.push(child);
        out.push(props.separator);
    }, []);
    //Remove the last separator, which is not necessary
    out.pop();
    return out;
}
Join.propTypes = {
    separator: PropTypes.node,
};

export const Spaced = (props) => Join({...props, separator: ' '});
