import {API_BASE}  from '@env';
import axios from "axios";

export default (params) => {
	params = { 
		endpoint: "", 
		method: 'GET', 
		page: 1, 
		size: 50,
		...params
	}
	const {} = params;
	const apiBase = API_BASE;

	const options = {
		method: method,
		headers: {

		},
		url: `${apiBase}${endpoint}`,
		params: { page, size },
	}

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios.request(options);
		} catch (error) {
		} finally {
		}
	}

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	}

	return { data, isLoading, error, refetch }
}