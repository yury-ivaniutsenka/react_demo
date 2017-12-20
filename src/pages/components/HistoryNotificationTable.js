import React, { Component } from 'react';
import styled from 'styled-components';

const HistoryNotificationTableStyled = styled.div`
  width: 360px;
  height: 200px;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0 auto;


  &::-webkit-scrollbar
  {
    height: 1px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb
  {
    height: 10px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #fff;
  }

  .row {
    width: 1800px;
    height: 300px;
  }
  .cell {
    display:inline-block;
    width: 180px;
    height: 100px;
    text-align: left;
  }
  .label {
    margin: 15px 0;
    font-size: 15px;
  }
  .data {
    margin: 15px 0;
    font-size: 16px;
    font-weight: bold;
  }
  }
  .data a {
    color: #fff;
    underline: none;
    margin: 15px 0;
    font-size: 16px;
    font-weight: bold;
  }
`;

class HistoryNotificationTable extends Component {
  render() {

    const data = [
      {
        id: 1,
        date: '20.11.2017',
        application: 'Esillelaitto1',
        point: 'Ostopaatos1'
      },
      {
        id: 2,
        date: '20.11.2017',
        application: 'Esillelaitto2',
        point: 'Ostopaatos2'
      },
      {
        id: 3,
        date: '20.11.2017',
        application: 'Esillelaitto3',
        point: 'Ostopaatos3'
      },
      {
        id: 4,
        date: '20.11.2017',
        application: 'Esillelaitto4',
        point: 'Ostopaatos4'
      },
      {
        id: 5,
        date: '20.11.2017',
        application: 'Esillelaitto5',
        point: 'Ostopaatos5'
      },
    ];

    const listItems = data.map(({id, date, application, point}) =>
      [
        <div key={'Action' + id} className="cell">
          <div className="label">Action</div>
          <div className="data"><a href={'#' + id}>Edited</a></div>
        </div>,
        <div key={'Date' + id} className="cell">
          <div className="label">Date</div>
          <div className="data">{date}</div>
        </div>,
        <div key={'Application' + id} className="cell">
          <div className="label">Application</div>
          <div className="data">{application}</div>
        </div>,
        <div key={'Point' + id} className="cell">
          <div className="label">Point</div>
          <div className="data">{point}</div>
        </div>
      ]
    );

    return (
      <HistoryNotificationTableStyled>
        <div className="row">
          {listItems}
        </div>
      </HistoryNotificationTableStyled>
    );
  }
}

export default HistoryNotificationTable;
