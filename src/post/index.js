import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
	PostActions,
	PostCard,
	PostDescription,
	PostThumb,
	LikeOverlay,
	LikeAnimatedIcon,
	LikeCount
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

function Post ({ code, caption, likes, id, display_src }) {

	const [showLikeStatus, setShowLikeStatus] = useState(false);

	function handlePostLike() {
		setShowLikeStatus(true);
		setTimeout(() => {
			setShowLikeStatus(false);
		}, 1000);
	}

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
					<div style={{ position: 'relative' }}>
						<PostThumb
							src={ display_src }
							alt="Post thumbnail"
							width={'100%'}
							height={'auto'}
							onDoubleClick={handlePostLike}
						>
						</PostThumb>
						{showLikeStatus && 
							<LikeOverlay>
								<LikeAnimatedIcon>
									<LikeCount>{ likes }</LikeCount>
								</LikeAnimatedIcon>
							</LikeOverlay>
						}
					</div>
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
							onClick={handlePostLike}
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