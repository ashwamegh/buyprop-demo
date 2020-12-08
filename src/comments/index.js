import React, { useEffect, useState } from 'react';
import Button from './../components/buttons';
import styled from 'styled-components';
import { RowFlex } from '../common-styled';
import Header from './../components/header';
import commentsData from './data';
import postsData from './../allposts/data';
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
	CommentForm,
	CommentInput,
	PageWrapper,
	ModifiedLikeAnimatedIcon as LikeAnimatedIcon,
	ModifiedLikeCount as LikeCount
} from './styled';
import { LikeOverlay } from './../post/styled'



function Comments({ location: { state: { postId = null }}}) {
	const [posts, setPosts] = useState(postsData);
	const [comments, setComments] = useState(commentsData);
	const [postComments, setPostComments] = useState([]);
	const [postData, setPostData] = useState({});
	const [showLikeStatus, setShowLikeStatus] = useState(false);
	const [commentAuthor, setCommentAuthor] = useState('');
	const [newComment, setNewComment] = useState('');

	useEffect(() => {
		if(postId) {
			setPostData(posts.find((post) => post.code === postId));
			setPostComments(getPostComments(postId));
		}
	}, [])


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

	function handlePostLike() {
		const postIndex = posts.findIndex((post) => post.code === postId);
		posts[postIndex].likes += 1;
		setShowLikeStatus(true);
		setTimeout(() => {
			setShowLikeStatus(false);
		}, 1000);
	}

	function handleNewComment(e) {
		e.preventDefault();

		if(!commentAuthor || !newComment) {
			return alert('Please fill the required fields');
		}

		setPostComments([...postComments, {
			user: commentAuthor,
			text: newComment
		}]);
		setCommentAuthor('');
		setNewComment('');
	}

	if(!postId) {
		return alert("Post id not found");
	}

	return (
		<PageWrapper>
			<Header></Header>
			<PostCommentsContainer>
				<PostDetails>
					<div style={{ position: 'relative', width: '100%' }}>
						<PostImage
							src={postData.display_src}
							onDoubleClick={handlePostLike}
						></PostImage>
						{showLikeStatus && 
							<LikeOverlay>
								<LikeAnimatedIcon>
									<LikeCount>{ postData.likes }</LikeCount>
								</LikeAnimatedIcon>
							</LikeOverlay>
						}
					</div>
					<PostDescription>
						<p>
							{ postData.caption }
						</p>
						<PostActions>
							<Button
								fontIcon={"💙"}
								buttonText={postData.likes}
								title="Like"
								onClick={handlePostLike}
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
					<CommentForm onSubmit={handleNewComment}>
						<CommentInput
							type="text"
							required
							placeholder="Author"
							onChange={(e) => setCommentAuthor(e.target.value)}
							value={commentAuthor}
						></CommentInput>
						<CommentInput
							required
							placeholder="Comment"
							type="text"
							onChange={(e) => setNewComment(e.target.value)}
							value={newComment}
						></CommentInput>
						<button type="submit" style={{ visibility: 'hidden' }}>Submit</button>
					</CommentForm>
				</CommentsDetail>
			</PostCommentsContainer>
		</PageWrapper>
	)
}

export default Comments;