import { createSlice } from '@reduxjs/toolkit';
import { POST_CREATE_ACCESS_TOKEN, POST_CREATE_TOKEN } from '../../api/api';

const token = createSlice({
	name: 'token',
	initialState: {
		data: {
			refreshToken: window.localStorage.getItem('refreshToken') || null,
			accessToken: window.localStorage.getItem('accessToken') || null
		},
		loading: false,
		error: null
	},
	reducers: {
		fetchStarted: (state) => {
			state.loading = true;
		},
		fetchSuccess: {
			reducer: (state, action) => {
				state.loading = false;
				state.error = null;
				state.data = action.payload;
			},
			prepare: (payload) => {
				return {
					payload,
					meta: {
						localStorage: [
							{ key: 'accessToken', value: payload.accessToken },
							{ key: 'refreshToken', value: payload.refreshToken }
						]
					}
				};
			}
		},
		fetchError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.data = null;
		},
		renewAccessToken: {
			reducer: (state, action) => {
				state.data.accessToken = action.payload;
			},
			prepare: (payload) => {
				return {
					payload,
					meta: {
						localStorage: {
							key: 'accessToken',
							value: payload
						}
					}
				};
			}
		}
	}
});

const { renewAccessToken, fetchStarted, fetchError, fetchSuccess } =
	token.actions;

export const fetchToken = (user) => async (dispatch) => {
	try {
		dispatch(fetchStarted());

		const { url, options } = POST_CREATE_TOKEN(user);
		const response = await fetch(url, options);
		const json = await response.json();

		if (!response.ok) throw new Error(json.message);

		return dispatch(fetchSuccess(json?.data));
	} catch (error) {
		return dispatch(fetchError(error.message));
	}
};

export const fetchNewAccessToken = () => async (dispatch, getState) => {

	const state = getState();
	const { refreshToken } = state.token.data;

	try {
		const { url, options } = POST_CREATE_ACCESS_TOKEN({ refreshToken });
		const response = await fetch(url, options);
		const json = await response.json();

		return dispatch(renewAccessToken(json?.accessToken));
	} catch {}
};

export default token.reducer;
