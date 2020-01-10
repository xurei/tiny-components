import React from 'react'; //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

export function FlexLayout(props) {
    const style = Object.assign({}, props.style, {
        flexDirection: props.direction || 'row',
        position: 'relative',
        display: 'flex',
        height: '100%',
        width: '100%',
    });
    return (
        <div {...props} style={style}>
            {props.children}
        </div>
    );
}
FlexLayout.propTypes = {
    direction: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
};

export function FlexChild(props) {
    const canOverlay = typeof(props.canOverlay) === 'undefined' ? true : props.canOverlay;
    const style = Object.assign({
        height: canOverlay ? 'auto' : 0,
    }, props.style, {
        flexGrow: props.grow || 0,
        flexShrink: props.shrink || 0,
    });

    return (
        <div {...props} style={style}>
            {props.children}
        </div>
    );
}
FlexChild.propTypes = {
    grow: PropTypes.number,
    shrink: PropTypes.number,
    canOverlay: PropTypes.bool,
};
