import React from 'react';
import instagramLogo from './../assets/instagram-logo.png';
import { Header as StyledHeader } from './../common-styled';

function Header() {
	return (
		<StyledHeader>
			<img src={instagramLogo} alt="Header logo" width="25%" height="auto">
			</img>
		</StyledHeader>
	)
}

export default Header;