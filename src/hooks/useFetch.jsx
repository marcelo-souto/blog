import React from 'react';
import { createNewAccessToken } from '../functions/handleToken';

const useFetch = () => {
	const [loading, setLoading] = React.useState(null);
	const [data, setData] = React.useState(null);
	const [error, setError] = React.useState(null);

	const request = React.useCallback(async (url, options) => {
		let json;
		let response;

		try {
			setLoading(true);
			setError(false);
			response = await fetch(url, options);
			json = await response.json();

			if (!response.ok && response.status === 401) {

				const { payload } = await createNewAccessToken()
				options.headers.authorization = 'Bearer ' + payload;

				response = await fetch(url, options);
				json = await response.json();
			}

			if (!response.ok) throw new Error(json.message);
		} catch (error) {
			json = null;
			setError(error.message);
		} finally {
			setData(json);
			setLoading(false);
			return { response, json };
		}
	}, []);

	return { loading, error, data, request };
};

export default useFetch;
