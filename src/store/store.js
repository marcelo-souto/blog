import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Reducers
import token from './token/token';
import user from './user/user';

// Middlewares
import localStorage from './middlewares/localStorage';

const reducer = combineReducers({ token, user });

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorage)
});

export default store;
