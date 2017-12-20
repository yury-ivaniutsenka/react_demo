import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header/index';

const PageStyled = styled.div`
  background: linear-gradient(135.58deg, #1A2738 0%, #0358FF 100%);
  height: 100vh;
  overflow: hidden;
`;

class Page extends Component {
	render() {
		return (
			<PageStyled className="page">
				<Header/>
				{this.props.children}
			</PageStyled>
		);
	}
}

export default Page;
