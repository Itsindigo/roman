import React from 'react';
import PropTypes from 'prop-types';

const RomanDisplay = ( props ) => {
    return (
        <h1>{props.romanNumber}</h1>
    )
}

RomanDisplay.propTypes = {
    romanNumber: PropTypes.string
}

export default RomanDisplay
