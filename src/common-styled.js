import styled from 'styled-components';

export const RowFlex = styled.div`
	display: flex;
	flex-flow: row wrap;
`

export const ColumnFlex = styled.div`
	display: flex;
	flex-flow: column wrap;
`

export const Header = styled.header`
	text-align: center;
	padding: 1em;
`

export const Button = styled.button`
	border: 1px solid #f5f5f5;
	height: 36px;
	min-width: 44%;
	max-width: 150px;
	margin: 0.5em;
	padding: 0.3em 0.5em;
	background-color: #fff;
	color: #0b5989;
	cursor: pointer;
	transition: color 0.3s ease-in, background-color 0.3s ease-in;

	&:hover,
	&:active,
	&:focus {
		color: #fff;
		background-color: #0b5989;
	}

	@media only screen and (max-width: 767px) {
		min-width: 90%;
	}
`