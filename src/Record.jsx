import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { deleteRecord, editRecord } from './actions/records'
import './Home.css'

const Record = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { id } = useParams()
	const record = useSelector((state) => id ? state.records.find((record) => record.id === +id) : null)
	const [title, setTitle] = useState(record.title)
	const [content, setContent] = useState(record.content)
	const remove = (recordId) => {
		const toRemove = window.confirm('Удалить?')
		if (toRemove) {
			dispatch(deleteRecord(recordId))
			history.push('/')
		}
	}
	const saveRecord = () => {
		dispatch(editRecord({ id: record.id, title, content }))
		history.push('/')
	}

	return (
		<div className="record">
			<div>
				<button onClick={() => history.push('/')} className="btn">Назад</button>
			</div>
			<h3>Запись "{record.title}"</h3>
			<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
			<textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} />
			<div className="record__buttons">
				<button onClick={() => remove(+id)} className="btn btn__remove">Удалить</button>
				<button className="btn" onClick={() => saveRecord()}>Сохранить</button>
			</div>
		</div>
	)
}

export default Record
