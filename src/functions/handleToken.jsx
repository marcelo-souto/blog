import { POST_CREATE_ACCESS_TOKEN } from '../api/api';

export const createNewAccessToken = async (refreshToken) => {

	const { url, options } = POST_CREATE_ACCESS_TOKEN({ refreshToken });
	const response = await fetch(url, options);
	const json = await response.json();

	return json.accessToken;

};