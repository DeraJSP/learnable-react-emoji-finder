import React, { useState } from 'react';
import SearchResult from './SearchResult'
import './style.css'

export default function Search({ emojiList }) {
	const [searchInput, setSearchInput] = useState('');
	const [showResult, setShowResult] = useState(false);

  const filteredEmoji = emojiList.filter(
    emoji => {
      return (
        emoji.keywords.includes(searchInput.toLowerCase())
      );
    }
  );

	const handleChange = e => {
    	setSearchInput(e.target.value);
      if (e.target.value === "") {
      setShowResult(false);
      } else {
        setShowResult(true);
      }
    };

  function searchResult () {
    if (showResult) {
      return (
        <SearchResult filteredEmoji={filteredEmoji} />
        );
    }
  }

	return (
    <>
      <div className="container">
        <input type="search" onChange={handleChange} placeholder="Enter a keyword" />
      </div>
      <div>
          {searchResult()}
      </div>
    </>
	);
}