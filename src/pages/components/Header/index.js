import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../elements/Logo';
import Block from "../../elements/Block";
import Menu from "./components/Menu/mobile"

const Wrapper= Block.extend`
  background: white;
  border-bottom: 7px solid #F5A623;
  position: relative;
`;

const MenuStyled = styled.ul`
  position: absolute;
  right: 100px;
  top: 50px;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper height="200px">
          <Menu/>
          <Block flex={1} align="center" justify="center">
              <Logo scale={0.5} />
          </Block>
      </Wrapper>
    );
  }
}

export default Header;
