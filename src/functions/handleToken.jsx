import { useDispatch, useSelector } from 'react-redux';
import { POST_CREATE_ACCESS_TOKEN } from '../api/api';
import { renewAccessToken } from '../store/token/token';

export const createNewAccessToken = async () => {

	const { refreshToken } = useSelector((state) => state.token.data);
	const dispatch = useDispatch()

	const { url, options } = POST_CREATE_ACCESS_TOKEN({ refreshToken });
	const response = await fetch(url, options);
	const json = await response.json();

	return dispatch(renewAccessToken(json.accessToken));
};
