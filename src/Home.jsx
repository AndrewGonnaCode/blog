import React, { useState } from 'react'
import Card from './components/Card/Card'
import './Home.css'
import Modal from './components/Modal/Modal'
import { useSelector } from 'react-redux'

const Records = () => {
	const records = useSelector((state) => state.records)
	const [showModal, setShowModal] = useState(false)
	return (
		<div className="main">
			<div className='records'>
				<h3>Блог</h3>
				<div className="records__items">
					{records.map((record) => (
						<Card key={record.id} record={record} />
					))}
				</div>
				<button onClick={() => setShowModal(true)} className="btn btn__add">+Добавить</button>
			</div>
			{showModal && <Modal setShowModal={setShowModal} />}
		</div>
	)
}

export default Records
