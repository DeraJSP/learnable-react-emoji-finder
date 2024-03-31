import React from 'react';
import Card from './Card';

export default function SearchResult({ filteredEmoji }) {
	const filtered = filteredEmoji.map(emoji => 
		<Card emoji={emoji} />
		)
	return (
		<div>
			{filtered}
		</div>
	)
}