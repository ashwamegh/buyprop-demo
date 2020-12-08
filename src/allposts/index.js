import React from 'react';
import styled from 'styled-components';
import posts from './data';
import Post from './../post';
import { RowFlex } from '../common-styled';
import Header from './../components/header';

const AllPostsContainer = styled(RowFlex)`
	max-width: 75%;
	justify-content: center;
	align-items: center;
	margin: auto;
`;

function getPosts() {
	let data;
	try {
		data = JSON.parse(posts);
	} catch (error) {
		return posts;
	}
	return data;
}


function AllPosts() {
	return (
		<>
			<Header></Header>
			<AllPostsContainer>
				{
					getPosts().map((post) => 
						<Post key={post.code} {...post}>
						</Post>
					)
				}
			</AllPostsContainer>
		</>
	)
}

export default AllPosts;