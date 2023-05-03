import React from 'react';
import useFetch from '../hooks/useFetch';
import {
	POST_CREATE_TOKEN,
	GET_USER,
	POST_DELETE_REFRESH_TOKEN
} from '../api/api';
import storage from '../functions/handleLocalStorage';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {

	const [user, setUser] = React.useState(null);
	const [login, setlogin] = React.useState(false);
	
	const navigate = useNavigate();

	const { loading, error, request } = useFetch();


	const getUser = React.useCallback(async () => {
		const accessToken = storage.get('accessToken');

		if (accessToken) {
			const { url, options } = GET_USER({ accessToken });
			const { response, json } = await request(url, options);

			if (response.ok && json.data) {
				setUser(json.data);
				return true;
			}
		} else {
			setUser(null);
			return false;
		}
	}, []);


	const userLogin = React.useCallback(async (email, password) => {
		const { url, options } = POST_CREATE_TOKEN({ email, password });
		const { json, response } = await request(url, options);

		if (response.ok && json.data) {
			storage.set('accessToken', json.data.accessToken);
			storage.set('refreshToken', json.data.refreshToken);

			await getUser();
			setlogin(true);
			navigate('/dashboard');
		}
	}, []);


		const userLogout = React.useCallback(async () => {
			const refreshToken = storage.get('refreshToken');

			if (refreshToken) {
				const { url, options } = POST_DELETE_REFRESH_TOKEN({ refreshToken });
				const { response, json } = await request(url, options);

				storage.delete('accessToken');
				storage.delete('refreshToken');
				setUser(null);
				setlogin(false);

			} else {
				storage.delete('accessToken');
				storage.delete('refreshToken');
				setUser(null);
				setlogin(false);

			}
		}, []);


	const autoUserLogin = React.useCallback(async () => {
		const isTokenValidated = await getUser();

		if (!isTokenValidated) {
			userLogout()
		} else {
			setlogin(true);
			navigate('/dashboard');
		}
	}, []);


	// React.useEffect(() => {
	// 	autoUserLogin();
	// }, []);

	return (
		<UserContext.Provider
			value={{ loading, error, userLogin, login, user, userLogout }}
		>
			{children}
		</UserContext.Provider>
	);
};
