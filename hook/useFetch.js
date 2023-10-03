import { useState, useEffect } from "react";
import {API_BASE}  from '@env';

export default ({ endpoint, method = 'GET', page = 1, size = 50 }) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	console.log(process.env);

	const apiBase = API_BASE;

	const options = {
		method,
		headers: {

		},
		url: `${apiBase}${endpoint}`,
		params: { page, size },
	}

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios.request(options);
			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			alert("There is an error")
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	}

	return { data, isLoading, error, refetch }
}

