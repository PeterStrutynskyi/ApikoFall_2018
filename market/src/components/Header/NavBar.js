import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import connect from "react-redux/es/connect/connect";


const staticNavLinks = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Contact',
    to: '/contact'
  },
];

const dynamicNavLinks = {
  logout: {
      label: 'Logout',
      to: '/logout'
  },
  login:  {
      label: 'Login / Register',
      to: '/login'
  },
};


const NavList = styled.div`
  width: 100%;
  height: 40px;
  display:flex;
  justify-content: space-between;
  background: url(/assets/images/shadow.png) bottom center no-repeat;
  padding-bottom: 3px;
`;


const MenuItem = styled.div`
  //padding: 10px 10px 10px 10px;
`;

const NavLinkS = styled(NavLink)`
  padding: 10px 13px;
  color: #000;
  height: 16px;
  display: inline-block;
  text-decoration: none;
  
  &:hover,
  &:focus {
    box-shadow: inset 0 2px #0095c6; 
  }
`;


const NavBar = ({
  currentUser
}) => (
  <NavList>
    {
      staticNavLinks.map(( { label, to } ) => (
        <MenuItem key = { label } >
          <NavLinkS
            exact
            to={ to }
            activeStyle={{
              boxShadow: "inset 0 2px #0095c6"
            }}
          >
            { label }
          </NavLinkS>
        </MenuItem>
        )
      )
    }

    {
      currentUser ?
        <MenuItem>
          `{currentUser.firstName} {currentUser.lastName}`
          <NavLinkS
            exact
            to={ dynamicNavLinks.logout.to }
            activeStyle={{
              boxShadow: "inset 0 2px #0095c6"
            }}
          >
            { dynamicNavLinks.logout.label }
          </NavLinkS>
        </MenuItem>
        :
        <MenuItem>
          <NavLinkS
            exact
            to={ dynamicNavLinks.login.to }
            activeStyle={{
              boxShadow: "inset 0 2px #0095c6"
            }}
          >
            { dynamicNavLinks.login.label }
          </NavLinkS>
        </MenuItem>

    }


  </NavList>
);

const mapStateToProps = (state) => ({
   currentUser: { firstName: 'Peter', lastName: 'Strutynskyi'},
});


export default connect(mapStateToProps)(NavBar);


