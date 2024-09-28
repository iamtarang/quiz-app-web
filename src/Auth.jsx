/* eslint-disable react-refresh/only-export-components */
import axios from 'axios'

//? Defining the base URL
export const connection = axios.create({
	baseURL: 'http://localhost:3000/api',
	headers:{
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	}
});

//? Adding token to the header for each request
export const config = {
	headers: {
		'token': `${sessionStorage.getItem('token')}`,
		// eslint-disable-next-line no-useless-concat
	}
};
