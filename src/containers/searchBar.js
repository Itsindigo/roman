import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions/romanNumberActions';


class SearchBar extends Component {

    onChange = (e) =>  {
        this.props.setSearchTerm(e.target.value);
    }
    
    render() {
        return (
            <div>
                <form>
                    <input
                        onChange={this.onChange}
                        name="searchTerm"
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchTerm: state.romanNumber.searchTerm
})

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func.isRequired
}


export default connect(mapStateToProps, { setSearchTerm })(SearchBar);