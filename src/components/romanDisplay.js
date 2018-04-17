import React from 'react';
import PropTypes from 'prop-types';

const RomanDisplay = ({ romanNotation }) => {
    return <h1>{romanNotation}</h1>
}

RomanDisplay.propTypes = {
    romanNotation: PropTypes.string.isRequired
}

export default RomanDisplay