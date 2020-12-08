import styled from 'styled-components';
import { RowFlex, ColumnFlex } from './../common-styled';

export const PostCard = styled(ColumnFlex)`
	width: 30%;
	margin: 0.5% 1.5%;
	box-shadow: 2px 2px 5px 5px #eee;
	cursor: pointer;

	@media only screen and (min-width: 1502px) {
		min-height: 560px;
	}

	@media only screen and (min-width: 1193px) {
		min-height: 490px;
	}

	@media only screen and (max-width: 1192px) {
		min-height: 430px;
	}
	
	@media only screen and (max-width: 992px) {
		width: 44%;
	}

	@media only screen and (max-width: 512px) {
		width: 90%;
		margin: 4% 2%;
	}
`

export const PostThumb = styled.img``

export const PostDescription = styled(ColumnFlex)`
	padding: 1em;
	padding-bottom: 1.5em;
	justify-content: space-between;
`

export const PostActions = styled(RowFlex)`
	width: 100%;
	height: 100%;
`