import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ApplicationIcon from "../elements/icons/ApplicationIcon";
import HistoryIcon from "../elements/icons/HistoryIcon";
import NotificationIcon from "../elements/icons/NotificationIcon";


const MobileMenuStyled = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
  @media (min-width: 1024px) {
		display: none;
  }
  .mobile-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 300px;
    background-color: rgba(0,43,126,0.73);

    a {
      height: 46px;
      width: 100%;
      display: block;
      background-color: #F5A623;
      margin: 15px 0;
      color: #fff;
      text-decoration: none;
      font-size: 29px;
      padding: 10px;

      svg {
        margin-top: -10px;
        float: left;
      }
    }

    button {
      margin-top: 60px;
      color: #002B7E;
      font-size: 23px;
      height: 49px;	
      width: 156px;	
      border: 1.5px solid #002B7E;	
      border-radius: 24.5px;	
      background-color: #FFFFFF;	
      box-shadow: 0 6px 19px 0 rgba(0,0,0,0.23);
    }
  }
`;


class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  show = () => {
    console.log('show');
    this.setState({show: true});
  }

  hide = () => {
    console.log('show');
    this.setState({show: false});
  }

  render() {
    return (
      <MobileMenuStyled>
        <img onClick={this.show} src="menu.png"/>
        <div className="mobile-menu" style={{display: this.state.show ? 'block' : 'none' }}>
          <Link to="/"><ApplicationIcon className="mobile-menu-icon" scale={1} opacity="1"/>Applications</Link>
          <Link to="/history"><HistoryIcon className="mobile-menu-icon" scale={1} opacity="1"/>History</Link>
          <Link to="/notifications"><NotificationIcon className="mobile-menu-icon" scale={1} opacity="1"/>Notifications</Link>
          <button onClick={this.hide}>close</button>
        </div>
      </MobileMenuStyled>
    );
  }
}

export default MobileMenu;
