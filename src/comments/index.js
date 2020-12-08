import React from 'react';
import styled from 'styled-components';
import { RowFlex } from '../common-styled';
import Header from './../components/header';
import comments from './data';

const CommentsContainer = styled(RowFlex)`
	max-width: 75%;
	justify-content: center;
	align-items: center;
	margin: auto;
`;

function getPostComments(code) {
	let data;
	try {
		data = JSON.parse(comments);
	} catch (error) {
		return comments;
	}
	return data;
}

function Comments({ location: { state: { post = null }}}) {
	if(!post) {
		return alert("Post id not found");
	}

	return (
		<>
			<Header></Header>
			<CommentsContainer>
				{/* {
					[getPosts()].map((post) => 
						<Post key={post.code} {...post}>
						</Post>
					)
				} */}
				{ post }
			</CommentsContainer>
		</>
	)
}

export default Comments;