import React, { Component } from 'react';
import styled from 'styled-components';
import ApplicationIcon from "./elements/icons/ApplicationIcon";
import Button from "./elements/Button";
import MobileMenu from './components/MobileMenu';

const ApplicationsPageStyled = styled.div`
  color: #fff;
  text-align: center;
  .page-icon {
    margin: 20px 0;
  }
`;

class ApplicationsPage extends Component {
  render() {
    return (
      <ApplicationsPageStyled>
        <ApplicationIcon className="page-icon" scale={2.4} opacity="1"/>
			  <Button onClick={() => console.log('Esillelaitto')}>Esillelaitto</Button>
        <MobileMenu />
      </ApplicationsPageStyled>
    );
  }
}

export default ApplicationsPage;
