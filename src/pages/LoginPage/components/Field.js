import React from 'react';
import styled from 'styled-components';
import Block from "../../elements/Block";


const Wrapper = Block.extend`
  margin-bottom: 40px;
`;

const Label = styled.label`
  height: 24px;		
  color: #FFFFFF;	
  font-size: 18px;	
  line-height: 24px;	
  text-align: center;
  text-transform: uppercase;
`;

const Field = ({label, children}) => (
	<Wrapper align="center" direction="column">
		{label && <Label>{label}</Label>}
		{children}
	</Wrapper>
);
export default Field;
