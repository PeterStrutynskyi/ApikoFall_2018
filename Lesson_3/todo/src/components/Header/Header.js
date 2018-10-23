
import React from 'react';
import PropTypes from 'prop-types';

import './Header.css'

const Header = ({ text }) => (
    <div className = "page-header text-center custom-header">
        <h1>{ text }</h1>
    </div>
);

Header.propTypes = {
    text: PropTypes.string
};

export default Header;
