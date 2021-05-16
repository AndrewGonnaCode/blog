
import './Modal.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createRecord } from '../../actions/records'

const Modal = ({ setShowModal }) => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const dispatch = useDispatch()

	const addRecord = () => {
		dispatch(createRecord({ id: Date.now(), title, content }))
		setShowModal(false)
	}

	return (
		<div className="modal__wrapper">
			<div className="modal__content">
				<label htmlFor="title">Title</label>
				<input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
				<label htmlFor="content">Content</label>
				<textarea name="content" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
				<div className="modal__buttons">
					<button onClick={() => setShowModal(false)} className="btn">Отмена</button>
					<button disabled={title === '' || content === ''} onClick={() => addRecord()} className="btn">Сохранить</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
