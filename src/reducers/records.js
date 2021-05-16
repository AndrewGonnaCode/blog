import { ADD, DELETE, EDIT } from "../constants/records";
import { recordsData } from '../data'

export default (records = recordsData, action) => {
	switch (action.type) {
		case DELETE:
			return records.filter((record) => record.id !== action.payload)
		case ADD:
			return [...records, action.payload]
		case EDIT:
			return records.map((record) => record.id === action.payload.id ? action.payload : record)
		default: return records
	}
}