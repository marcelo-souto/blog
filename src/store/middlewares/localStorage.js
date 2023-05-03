const localStorage = (store) => (next) => (action) => {
	const result = next(action);
	const { meta } = action;
  
	if (meta && meta.localStorage) {
		const { localStorage } = meta;

		if (Array.isArray(localStorage)) {
			localStorage.map(({key, value}) =>
				window.localStorage.setItem(key, value)
			);
		} else {
			window.localStorage.setItem(localStorage.key, localStorage.value);
		}
	}

	return result;
};

export default localStorage;
