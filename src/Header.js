import React from 'react';
import header from './header.jpg';

export default function Header() {
	return (
		<header style={{
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`
		}}>
	      <h1>Emoji Finder</h1>
    	</header>
	)
}
