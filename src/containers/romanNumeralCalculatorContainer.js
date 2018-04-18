import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRomanNumber } from '../actions/romanNumberActions'

import SearchBar from './searchBar';
import RomanDisplay from '../components/romanDisplay';



class RomanNumeralCalculatorContainer extends Component {

    componentWillMount() {
        this.props.getRomanNumber('Enter a number to convert to Roman');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchTerm) {
            this.props.getRomanNumber(nextProps.searchTerm);
        }
    }

    render() {
        return (
            <div>
                <SearchBar />
                <RomanDisplay romanNumber={this.props.romanNumber} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    romanNumber: state.romanNumber.value,
    searchTerm: state.romanNumber.searchTerm
})

export default connect(mapStateToProps, { getRomanNumber })(RomanNumeralCalculatorContainer);