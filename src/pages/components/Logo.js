import React, { Component } from 'react';
import styled from 'styled-components';

const LogoContainerStyled = styled.div`
  color: #F1951C;
  text-transform: uppercase;
  text-allign: center;
  width: 144px;
  height: 171px;
  margin: 10px auto;
`;

const LogoStyled = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;
  display: block;
`;

const NanoStyled = styled.h1`
  display: inline-block;
  font-family: "PT Mono";
  font-size: 56px;
  font-weight: bold;
  margin: 0;
`;

const LearningStyled = styled.span`
  display: inline-block;
  font-family: "Lucida Grande";
  font-size: 30px;
  font-weight: bold;
  margin-top: -15px;
`;

class Logo extends Component {
  render() {
    return (
      <LogoContainerStyled className="logo">
        <LogoStyled src="logo.png"/>
        <NanoStyled>NANO</NanoStyled>
        <LearningStyled>learning</LearningStyled>
      </LogoContainerStyled>
    );
  }
}

export default Logo;
