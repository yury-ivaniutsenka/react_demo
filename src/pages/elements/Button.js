// @flow
import * as React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	height: 52px;
  	width: 487px;
  	justify-content: center;
  	align-items: center;
	box-shadow: 0 6px 19px 0 rgba(0,0,0,0.23);
  	border: 1.5px solid #002B7E;
  	border-radius: 15px;
  	background-color: #FFFFFF;
  	color: #00287E;   
  	font-size: 24px;  
  	font-weight: 700;
    cursor: ${({disable}) => disable ? 'inherit' : 'pointer'};
    opacity: ${({disable}) => disable ? '0.3' : '1§'};
    ${({disable}) => !disable && `
    	&:hover{
    		transition: all 0.2s ease;
    		box-shadow: 0 5px 0 0 rgba(106, 135, 0, 0.3), inset 0 5px 0 0 rgba(255, 255, 255, 0.4);
    		transform: translate(0, 2px);
    		box-shadow: none;
    	}
    `};
`;

type Props = {
	children: React.Node,
	disable: boolean,
	className: string,
	onClick: (evt: Event) => void,
}


const Button = (props: Props) => (
	<Wrapper className={props.className} disable={props.disable} onClick={props.onClick}>
		{props.children}
	</Wrapper>
);

export default Button;

