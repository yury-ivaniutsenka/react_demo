import React, { Component } from 'react';
import styled from 'styled-components';
import HistoryNotificationTable from './components/HistoryNotificationTable';
import HistoryIcon from "./elements/icons/HistoryIcon";
import MobileMenu from './components/MobileMenu';

const HistoryStyled = styled.div`
  color: #fff;
  text-align: center;
  .page-icon {
    margin: 20px 0;
  }
`;

class History extends Component {
  render() {
    return (
      <HistoryStyled>
        <HistoryIcon className="page-icon" scale={2.4}/>
        <HistoryNotificationTable />
        <MobileMenu />
      </HistoryStyled>
    );
  }
}

export default History;
