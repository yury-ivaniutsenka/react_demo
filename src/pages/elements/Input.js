// @flow

import * as React from 'react';
import styled from "styled-components";

const Component = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid #FFFFFF;	
  border-radius: 15px;
  background: none;
  color: #FFFFFF;	
  font-size: 20px;
  padding: 5px;
  text-align: center;

  ${({disabled}) => disabled ? `
  	opacity: 0.5;
  ` : `
  	opacity: 1;`}
  
  &::-webkit-input-placeholder {
    color: #FFFFFF;	
    font-size: 20px;	
    font-weight: 300;	
    line-height: 27px;	
    text-align: center;
  }
`;

type Props = {
	placeholder?: string,
	disabled?: boolean,
	value: string,
	type: string,
	onChange: (val: string) => void,
}

const Input = (props: Props) => (
	<Component type={props.type}
			   value={props.value}
			   disabled={props.disabled}
			   placeholder={props.placeholder}
			   onChange={e => props.onChange(e.target.value)}/>
);

Input.defaultProps = {
	type: 'text',
};

export default Input;
