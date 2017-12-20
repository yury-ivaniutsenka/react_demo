import React, { Component } from 'react';
import styled from 'styled-components';

const RegisterStyled = styled.div`
  height: 282px;	
  width: 487px;
  margin: auto;
`;

const FormElementContainerlStyled = styled.div`
  margin-bottom: 20px;
`;

const LabelStyled = styled.label`
  height: 24px;	
  width: 487px;	
  color: #FFFFFF;	
  font-family: "Open Sans";	
  font-size: 18px;	
  line-height: 24px;	
  text-align: center;
`;

const InputStyled = styled.input`
  height: 40px;	
  width: 477px;	
  border: 2px solid #FFFFFF;	
  border-radius: 15px;
  background: none;
  color: #FFFFFF;	
  font-size: 20px;
  padding: 5px;
  &::-webkit-input-placeholder {
    color: #FFFFFF;	
    font-family: "Open Sans";	
    font-size: 20px;	
    font-weight: 300;	
    line-height: 27px;	
    text-align: center;
  }
`;

const ButtonStyled = styled.button`
  height: 52px;
  width: 487px;
	box-shadow: 0 6px 19px 0 rgba(0,0,0,0.23);
  border: 1.5px solid #002B7E;
  border-radius: 15px;
  background-color: #FFFFFF;
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  validateLogin = (event) => {
    //TODO Make validate
    this.setState({login: event.target.value});
  }

  validatePassword = (event) => {
    //TODO Make validate
    this.setState({password: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <RegisterStyled className="login-container">
        <form onSubmit={this.onSubmit}>
          <FormElementContainerlStyled>
            <LabelStyled>EMAIL</LabelStyled>
            <InputStyled type="text" value={this.state.login} onChange={this.validateLogin} placeholder="Type text here..." />
          </FormElementContainerlStyled>
          <FormElementContainerlStyled>
            <LabelStyled>Password</LabelStyled>
            <InputStyled type="password" value={this.state.password} onChange={this.validatePassword} placeholder="Type text here..." />
          </FormElementContainerlStyled>
          <FormElementContainerlStyled>
            <ButtonStyled type="submit">REGISTER</ButtonStyled>
          </FormElementContainerlStyled>
        </form>
      </RegisterStyled>
    );
  }
}

export default Register;
