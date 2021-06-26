import axios from 'axios';
import { FETCH_POSTS, NEW_POST } from './types';

const url = "https://jsonplaceholder.typicode.com/posts"


export const fetchPosts = () => {
	return async dispatch => {
		try {
			const response = await axios(url)
			dispatch({ type: FETCH_POSTS,
						payload: response.data
					})
		} catch (error) {
			console.error(error)
		}	
	}
}


export const newPost = newPost => {
	console.log("Posting data")
	return async dispatch => {
		console.log("Posted data")
		try {
			const response = await axios.post(url, newPost)
			console.log(response.data)
			dispatch({
				type: NEW_POST,
				payload: response.data
			})		
		} catch (error) {
			console.error(error)
		}
	}
}
