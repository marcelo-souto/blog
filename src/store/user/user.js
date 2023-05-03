import createAsyncSlice from '../helpers/createAsyncSlice';
import { GET_USER } from '../../api/api';
import { fetchToken } from '../token/token';

const user = createAsyncSlice({
	name: 'user',
	reducers: {
		updateAvatar(state, action) {
			state.data.avatar.url = action.payload;
		}
	},
	fetchConfig: (payload) => GET_USER(payload)
});

export const { updateAvatar } = user.actions;

export const fetchUser = user.asyncAction;

export const userLogin = (user) => async (dispatch) => {
	const { payload } = await dispatch(fetchToken(user));
	if (payload.accessToken) await dispatch(fetchUser(payload.accessToken));
};

export const autoLogin = () => async (dispatch, getState) => {
	const state = getState();
	const { accessToken } = state.token.data;
	if (accessToken) await dispatch(fetchUser(accessToken));
};

export default user.reducer;
