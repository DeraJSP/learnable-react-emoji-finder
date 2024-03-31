import React from 'react'
import './style.css'

export default function Card({ emoji }) {
	return (
		<div className="emoji">
			{emoji.symbol}
		</div>
	)
}