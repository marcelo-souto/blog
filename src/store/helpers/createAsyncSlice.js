import { createSlice } from '@reduxjs/toolkit';
import { fetchNewAccessToken } from '../token/token';

const createAsyncSlice = (config) => {
	const slice = createSlice({
		name: config.name,
		initialState: {
			loading: false,
			data: null,
			error: null,
			...config.initialState
		},
		reducers: {
			fetchStarted(state, action) {
				state.loading = true;
			},
			fetchSuccess(state, action) {
				state.loading = false;
				state.data = action.payload;
				state.error = null;
			},
			fetchError: {
				reducer(state, action) {
					state.loading = false;
					state.data = null;
					state.error = action.payload;
				},
				prepare(payload) {
					return { payload, meta: { error: payload } };
				}
			},
			...config.reducers
		}
	});

	const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

	const asyncAction = (payload) => async (dispatch) => {
		try {
			dispatch(fetchStarted());

			const { url, options } = config.fetchConfig(payload);
			let response = await fetch(url, options);
			let json = await response.json();

			if (!response.ok && response.status === 401) {
				const { payload } = await dispatch(fetchNewAccessToken());
				options.headers.authorization = 'Bearer ' + payload;

				response = await fetch(url, options);
				json = await response.json();
			}

			if (!response.ok) throw new Error(json.message);

			return dispatch(fetchSuccess(json?.data));
		} catch (error) {
			return dispatch(fetchError(error.message));
		}
	};

	return { ...slice, asyncAction };
};

export default createAsyncSlice;
