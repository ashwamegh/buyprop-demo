import React, { useEffect, useState } from 'react';
import Button from './../components/buttons';
import styled from 'styled-components';
import { RowFlex } from '../common-styled';
import Header from './../components/header';
import comments from './data';
import posts from './../allposts/data';
import {
	PostDetails,
	PostImage,
	PostActions,
	PostDescription,
	CommentsDetail,
	PostCommentsContainer,
	CommentsWrapper,
	CommentAuthor,
	CommentText,
	CommentInput,
	PageWrapper
} from './styled';

function getCommentsCount(code) {
	let commentSize = 0;
	try {
		commentSize = comments[code].length;
	} catch (error) {
	}
	return commentSize;
}

function getPostComments(code) {
	let data;
	try {
		data = JSON.parse(comments)[code];
	} catch (error) {
		data = comments[code];
	}
	if(!data) {
		return [];
	}
	return data;
}

function Comments({ location: { state: { postId = null }}}) {
	const [postComments, setPostComments] = useState([]);
	const [postData, setPostData] = useState({});

	useEffect(() => {
		if(postId) {
			setPostData(posts.find((post) => post.code === postId));
			setPostComments(getPostComments(postId));
		}
	}, [])

	if(!postId) {
		return alert("Post id not found");
	}

	return (
		<PageWrapper>
			<Header></Header>
			<PostCommentsContainer>
				<PostDetails>
					<PostImage src={postData.display_src}></PostImage>
					<PostDescription>
						<p>
							{ postData.caption }
						</p>
						<PostActions>
							<Button
								fontIcon={"💙"}
								buttonText={postData.likes}
								title="Like"
								style={{
									boxShadow: '1px 1px 2px 2px #eee',
									margin: '0.5em 0.5em 0.5em 0'
								}}
							>
							</Button>
							<Button
								fontIcon={'💬'}
								buttonText={ getCommentsCount(postId) }
								title="Comment"
								style={{
									boxShadow: '1px 1px 2px 2px #eee',
									margin: '0.5em 0.5em 0.5em 0'
								}}
							>
							</Button>
						</PostActions>
					</PostDescription>
				</PostDetails>
				<CommentsDetail>
					{
						postComments.map((comment, index) => 
						<CommentsWrapper key={index}>
							<CommentAuthor>
								{ comment.user }
							</CommentAuthor>
							<CommentText>
								{ comment.text }
							</CommentText>
						</CommentsWrapper>)
					}
					<CommentInput type="text" placeholder="Author"></CommentInput>
					<CommentInput placeholder="Comment"></CommentInput>
				</CommentsDetail>
			</PostCommentsContainer>
		</PageWrapper>
	)
}

export default Comments;