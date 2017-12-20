import React from 'react';
import {Link} from 'react-router-dom';
import Block from "../../../../elements/Block";

const Wrapper = Block.extend`
  position: absolute;
  right: 100px;
  top: 50px;
`;


const Menu = () => (
	<Wrapper>
		<li><Link to="/history">History</Link></li>
		<li><Link to="/login">Login</Link></li>
		<li><Link to="/register">Register</Link></li>
	</Wrapper>
);

export default Menu;
