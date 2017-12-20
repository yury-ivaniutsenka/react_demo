import React from 'react';
import {Link} from 'react-router-dom';
import Block from "../../../../elements/Block";
import NotificationIcon from "../../../../elements/icons/mobile/NotificationIcon";
import UserIcon from "../../../../elements/icons/mobile/UserIcon";

const Wrapper = Block.extend`
  position: absolute;
  right: 10px;
  top: 10px;
`;


const Menu = () => (
	<Wrapper justify="baseline">
		<Link to="/notifications"><NotificationIcon count={3}/></Link>
		<UserIcon/>
	</Wrapper>
);

export default Menu;
