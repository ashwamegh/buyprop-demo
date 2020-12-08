import React from 'react';
import styled from 'styled-components';
import { Button as StyledButton } from './../common-styled';

const Span = styled.span`
	margin: 2%;
`
const Button = ({ fontIcon, buttonText }) => {
	return (
		<StyledButton>
			<Span>{ fontIcon }</Span>
			<Span>{ buttonText }</Span>
		</StyledButton>
	)
}

export default Button;