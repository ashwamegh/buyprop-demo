import styled from 'styled-components';
import { ColumnFlex, RowFlex, Button as StyledButton } from './../common-styled';

export const PageWrapper = styled.div`
	padding: 4em 0;

	@media only screen and (max-width: 768px) {
		padding: 2em 0;
	}

	@media only screen and (max-width: 512px) {
		padding: 1.5em 0;
	}
`

export const PostCommentsContainer = styled(RowFlex)`
	max-width: 75%;
	min-height: 600px;
	justify-content: space-between;
	margin: auto;
	${'' /* box-shadow: 2px 2px 5px 5px #eee; */}
	border: 4px solid #f1f1f1;

	@media only screen and (min-width: 1193px) {
		max-width: 70%;
	}

	@media only screen and (min-width: 1312px) {
		max-width: 60vw;
	}

	@media only screen and (min-width: 768px) {
		flex-wrap: nowrap;
	}

	@media only screen and (max-width: 768px) {
		max-width: 80%;
	}

	@media only screen and (max-width: 512px) {
		max-width: 90%;
	}
`;

export const PostDetails = styled(ColumnFlex)`
	padding: 1em;
	height: 100%;
	width: 60%;

	@media only screen and (max-width: 768px) {
		width: 100%;
		padding-bottom: 0;
	}
`

export const PostImage = styled.img`
	object-fit: cover;
	width: 100%;
	${'' /* max-width: 500px; */}
`

export const PostDescription = styled(ColumnFlex)`
	padding: 1em;
	padding-bottom: 1.5em;
	padding-left: 0;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		text-align: center;
	}
`

export const PostActions = styled(RowFlex)`
	padding: 1em 1em 1em 0;

	@media only screen and (max-width: 768px) {
		width: 100%;
		justify-content: center;
	}
`

export const CommentsWrapper = styled.div`
	padding: 0.8em 0.4em 0.8em 0;
	border-bottom: 1px solid #eee;
`

export const CommentsDetail = styled(ColumnFlex)`
	width: 40%;
	padding-top: 1em;

	@media only screen and (max-width: 768px) {
		width: 100%;
		padding: 1em;
	}
`

export const CommentAuthor = styled.span`
	color: #0056af;
	font-weight: 800;
	font-size: 0.8em;
	margin-right: 0.7em;
	cursor: pointer;
`

export const CommentText = styled.span`
	color: #595c5b;
	font-weight: 500;
	font-size: 0.9em;
`

export const CommentInput = styled.input`
	outline: none;
	border: none;
	padding: 0.8em 0.4em 0.8em 0;
	border-bottom: 1px solid #eee;
	color: #595c5b;
`