import React, {Component} from 'react';
import styled from 'styled-components';
import Input from "../elements/Input";
import Field from "./components/Field";
import withLogic from "./logic";
import Button from "../elements/Button";


const Wrapper = styled.div`
  height: 282px;	
  width: 487px;
  margin: auto;
`;

const Error = styled.p`
	color: red;
`

const LoginPage = ({state: {email, password}, user: {errorMessage}, update, onSubmit}) =>
	<Wrapper>
		<Field label="Login">
			<Input name="login"
				   placeholder="Type your email..."
				   value={email}
				   onChange={email => update({email})} />
		</Field>
		<Field label="Password">
			<Input type="password"
				   name="password"
				   placeholder="Type your password..."
				   value={password}
				   onChange={password => update({password})} />
		</Field>
		{errorMessage && <Error>{errorMessage}</Error>}
		<Field>
			<Button onClick={onSubmit}>SUBMIT</Button>
		</Field>
	</Wrapper>;

export default withLogic(LoginPage);
