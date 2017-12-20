import React, { Component } from 'react';
import styled from 'styled-components';
import HistoryNotificationTable from './components/HistoryNotificationTable';
import NotificationIcon from "./elements/icons/NotificationIcon";
import MobileMenu from './components/MobileMenu';

const NotificationsStyled = styled.div`
  color: #fff;
  text-align: center;
  h1 {
    font-size: 30px;
  }
  .page-icon {
    margin: 20px 0;
  }
`;

class Notifications extends Component {
  render() {
    return (
      <NotificationsStyled>
        <NotificationIcon className="page-icon" opacity={1} count={4} scale={2.4}/>
        <HistoryNotificationTable />
        <MobileMenu />
      </NotificationsStyled>
    );
  }
}

export default Notifications;
