import React, { Component } from 'react';
import SearchBar from './searchBar';
import RomanDisplay from '../components/romanDisplay';


class RomanNumeralCalculatorContainer extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <RomanDisplay romanNotation={'x'} />
            </div>
        )
    }
}

export default RomanNumeralCalculatorContainer