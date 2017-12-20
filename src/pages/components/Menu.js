import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import History from '../pages/History';
import Notifications from '../pages/Notifications';


const MenuStyled = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #fff;
  text-align: center;
  @media (max-width: 1024px) {
		display: none;
	}
`;

const ListItemStyled = styled.li`
  display: inline-block;
  margin: 25px 0;
  padding: 0;
  width: 112px;
  height: 71px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

class Menu extends Component {
  render() {
    return (
      <MenuStyled>
          <ListItemStyled><Link to="/"><img src="applications.png"/>Applications</Link></ListItemStyled>
          <ListItemStyled><Link to="/history"><img src="history.png"/>History</Link></ListItemStyled>
          <ListItemStyled><Link to="/notifications"><img src="notifications.png"/>Notifications</Link></ListItemStyled>
        </MenuStyled>
    );
  }
}

export default Menu;
