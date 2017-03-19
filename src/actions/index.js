import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';

const ROOT_URL = 'https://api.mlab.com/api/1/databases/post-it/collections';
const API_KEY = '?apiKey=KrKqVwJ1mV9hk_9Ly3tEsras8pOrS7ZI';

export function getNotes() {
	const request = axios.get(`${ROOT_URL}/notes${API_KEY}`);
	
	return (dispatch) => {
		request.then(({data}) => {
			dispatch({ type: FETCH_NOTES, payload: data })
		});
	};
}

export function addNote(props) {
	const request = axios({
		method: 'post',
  		url: `${ROOT_URL}/notes${API_KEY}`,
  		data: JSON.stringify(props),
 		headers: {
    		'content-type': 'application/json'
  		}
	});
	return (dispatch) => {
		request.then(({data}) => {
			return dispatch(getNotes())
		});
	};
}

export function deleteNote(key) {
	const request = axios({
		method: 'delete',
  		url: `${ROOT_URL}/notes/${key}${API_KEY}`,
  		async: true,
		timeout: 300000
	});
	return (dispatch) => {
		request.then(({data}) => {
			return dispatch(getNotes())
		});
	};
}