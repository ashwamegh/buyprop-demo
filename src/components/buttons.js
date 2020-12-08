import React from 'react';
import styled from 'styled-components';
import { Button as StyledButton } from './../common-styled';

const Span = styled.span`
	margin: 2%;
`
const Button = ({ fontIcon, buttonText, style, onClick }) => {
	return (
		<StyledButton style={{ ...style }} onClick={onClick}>
			<Span>{ fontIcon }</Span>
			<Span>{ buttonText }</Span>
		</StyledButton>
	)
}

export default Button;