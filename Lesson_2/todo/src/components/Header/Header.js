
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css'

class Header extends Component {
    render() {
        const { text } = this.props;

        return (
            <div className = "page-header text-center custom-header">
                <h1>{ text }</h1>
            </div>
        );
    }
}

Header.propTypes = {
    text: PropTypes.string
};

export default Header;
