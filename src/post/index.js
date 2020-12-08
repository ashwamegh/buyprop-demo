import React from 'react';
import { Link } from "react-router-dom";
import {
	PostActions,
	PostCard,
	PostDescription,
	PostThumb
} from './styled';
import Button from './../components/buttons';
import comments from './../comments/data';


function getCommentsCount(code) {
	let commentSize = 0;
	try {
		commentSize = comments[code].length;
	} catch (error) {
	}
	return commentSize;
}

const Post = ({ code, caption, likes, id, display_src }) => {
	return (
		<>
			<PostCard>
				<Link
					to={{
						pathname: `/comments/${code}`,
						state: {
							postId: code
						}
					}}
				>
					<PostThumb
						src={ display_src }
						alt="Post thumbnail"
						width={'100%'}
						height={'auto'}
					>
					</PostThumb>
				</Link>
				<PostDescription>
					<p>
						{ caption }
					</p>
					<PostActions>
						<Button
							fontIcon={"💙"}
							buttonText={likes}
							title="Like"
							style={{
								margin: '0.5em 0.5em 0.5em 0'
							}}
						>
						</Button>
						<Button
							fontIcon={'💬'}
							buttonText={ getCommentsCount(code) }
							title="Comment"
							style={{
								margin: '0.5em 0.5em 0.5em 0'
							}}
						>
						</Button>
					</PostActions>
				</PostDescription>
			</PostCard>
		</>
	)
}

export default Post;