import { ADD, DELETE, EDIT } from "../constants/records"

export const deleteRecord = (id) => {
	return {
		type: DELETE,
		payload: id
	}
}

export const createRecord = (record) => {
	return {
		type: ADD,
		payload: record
	}
}

export const editRecord = (record) => {
	return {
		type: EDIT,
		payload: record
	}
}