import React from 'react';
import {
	PostActions,
	PostCard,
	PostDescription,
	PostThumb
} from './styled';
import Button from './../components/buttons';
import comments from './../comments/data';

const buttons = [
	{
		fontIcon: "fa-temp",
		buttonText: "count"
	}
]

function getCommentsCount(code) {
	let commentSize = 0;
	try {
		commentSize = comments[code].length;
	} catch (error) {
		console.log("no comments for", code);
	}
	return commentSize;
}

const Post = ({ code, caption, likes, id, display_src }) => {
	return (
		<>
			<PostCard>
				<PostThumb
					src={ display_src }
					alt="Post thumbnail"
					width={'100%'}
					height={'auto'}
				>
				</PostThumb>
				<PostDescription>
					<p>
						{ caption }
					</p>
					<PostActions>
						<Button
							fontIcon={"💙"}
							buttonText={likes}
							title="Like"
						>
						</Button>
						<Button
							fontIcon={'💬'}
							buttonText={ getCommentsCount(code) }
							title="Comment"
						>
						</Button>
					</PostActions>
				</PostDescription>
			</PostCard>
		</>
	)
}

export default Post;