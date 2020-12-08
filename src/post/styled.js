import styled from 'styled-components';
import { RowFlex, ColumnFlex } from './../common-styled';

export const PostCard = styled(ColumnFlex)`
	width: 30%;
	margin: 0.5% 1.5%;
	${'' /* box-shadow: 2px 2px 5px 5px #eee; */}
	border: 4px solid #f1f1f1;
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
	
	@media only screen and (min-width: 992px) {
		width: 28%;
	}

	@media only screen and (max-width: 992px) {
		width: 44%;
	}

	@media only screen and (max-width: 512px) {
		width: 90%;
		margin: 4% 2%;
	}
`

export const PostThumb = styled.img`
	position: relative;
`

export const LikeOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LikeAnimatedIcon = styled.div`
	height: 100px;
	width: 100px;
	transform: rotate(-135deg);
	background: #fff;
	margin: auto;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0.9;
	animation-name: like;
	animation-duration: 1s;

	&:before {
		content: "";
		position: absolute;
		border-radius: 50%;
		height: 100px;
		width: 100px;
		background: #fff;
		top: 50px;
		left: 0px;
	}

	&:after {
		content: "";
		position: absolute;
		border-radius: 50%;
		height: 100px;
		width: 100px;
		background: #fff;
		top: 0px;
		left: 50px;
	}

	@keyframes like {
		0% {
			transform: scale(1) rotate(-135deg);
		}
		50% {
			transform: scale(0.6) rotate(-135deg);
		}
		100% {
			transform: scale(1) rotate(-135deg);
		}
	}
`

export const LikeCount = styled.span`
	position: absolute;
	transform: rotate(135deg);
	height: 100%;
	width: 100%;
	z-index: 10;
	text-align: center;
	font-size: 3em;
	font-weight: 500;
	color: #025686;
`

export const PostDescription = styled(ColumnFlex)`
	padding: 1em;
	padding-bottom: 1.5em;
	justify-content: space-between;

	@media only screen and (max-width: 512px) {
		text-align: center;
	}
`

export const PostActions = styled(RowFlex)`
	padding: 1em 0;
	justify-content: flex-start;

	@media only screen and (max-width: 512px) {
		justify-content: center;
	}
`