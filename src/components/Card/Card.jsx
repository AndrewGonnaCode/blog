import React from 'react'
import { useHistory } from 'react-router-dom'
import './Card.css'

const Card = ({ record }) => {
	const history = useHistory()
	return (
		<div className="card">
			<h5>{record.title}</h5>
			<div className="card__content">
				{record.content}
			</div>
			<button onClick={() => history.push(`/records/${record.id}`)} className="btn">перейти</button>
		</div>
	)
}

export default Card
