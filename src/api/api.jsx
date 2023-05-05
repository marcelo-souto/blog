import storage from '../functions/handleLocalStorage';

const API_URL = 'https://rich-cyan-elk-tie.cyclic.app';
const TOKEN_API_URL = 'https://modern-gray-bedclothes.cyclic.app/token';

// const API_URL = 'http://localhost:3000';
// const TOKEN_API_URL = 'http://localhost:8080/token';

const POST_CREATE_USER = (body) => {
	return {
		url: API_URL + '/user/create',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	};
};

const POST_CREATE_TOKEN = (body) => {
	return {
		url: API_URL + '/user/login',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	};
};

const POST_VALIDATE_TOKEN = (body) => {
	return {
		url: API_URL + '/token/validate',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	};
};

const POST_CREATE_ACCESS_TOKEN = (body) => {
	return {
		url: TOKEN_API_URL,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	};
};

const POST_DELETE_REFRESH_TOKEN = (body) => {
	return {
		url: API_URL + '/user/logout',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	};
};

const POST_FORGET_PASSWORD = (body) => {
	return {
		url: API_URL + '/user/resetpassword',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	};
};

const GET_USER = (accessToken) => {
	return {
		url: API_URL + '/user/get/me',
		options: {
			method: 'GET',
			headers: {
				authorization: 'Bearer ' + accessToken
			}
		}
	};
};

const POST_UPDATE_USER = (formData) => {
	return {
		url: API_URL + '/user/update',
		options: {
			method: 'PUT',
			headers: {
				authorization: 'Bearer ' + storage.get('accessToken')
			},
			body: formData
		}
	};
};

const GET_CATEGORIES = () => {
	return {
		url: API_URL + '/category/get',
		options: {
			method: 'GET'
		}
	};
};

const POST_CREATE_POST = (body) => {
	return {
		url: API_URL + '/post/create',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: 'Bearer ' + storage.get('accessToken')
			},
			body: JSON.stringify(body)
		}
	};
};

const GET_POSTS = ({ limit, page, user }) => {
	return {
		url: `${API_URL}/post/get?_limit=${limit || 4}&_page=${page}&_user=${user}`,
		options: {
			method: 'GET',
			headers: {
				authorization: 'Bearer ' + storage.get('accessToken')
			}
		}
	};
};

export {
	POST_CREATE_USER,
	POST_CREATE_TOKEN,
	GET_USER,
	POST_VALIDATE_TOKEN,
	POST_CREATE_ACCESS_TOKEN,
	POST_DELETE_REFRESH_TOKEN,
	POST_FORGET_PASSWORD,
	POST_UPDATE_USER,
	GET_CATEGORIES,
	POST_CREATE_POST,
	GET_POSTS
};
