import React from 'react';

const types = {
	cpf: {
		regex:
			/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
		message: 'Insira um cpf válido'
	},
	email: {
		regex:
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		message: 'Insira um email válido'
	},
	password: {
		regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		message:
			'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres'
	},
	monetary: {
		regex: /^[0-9]\d{0,2}(\.\d{3})*\.\d{2}$/,
		message: 'Utilize apenas numeros que sigam padrão monetario'
	},
	number: {
		regex: /^[0-9]+$/,
		message: 'Utilize apenas números'
	},
	tel: {
		regex: /^[1-9]{2}\s?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
		message: 'Insira um número de telefone válido'
	},
	date: {
		regex: /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/,
		message: 'Insira uma data válida'
	},
	bool: {
		regex: /^true|false$/,
		message: 'Insira um valor correto'
	},
	url: {
		regex: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
		message: 'Insira um link válido'
	}
};

function useForm(type) {
	
	const [value, setValue] = React.useState('');
	const [status, setStatus] = React.useState({
		validated: null,
		error: null
	});

	function validate(value) {
		if (type === false) return true;

		if (value.length === 0) {
			setStatus({ validated: false, error: 'Campo Vazio' });
			return false;
		} else if (types[type] && !types[type].regex.test(value)) {
			setStatus({ validated: false, error: types[type].message });
			return false;
		} else {
			setStatus({ validated: true, error: null });
			return true;
		}
	}

	function onChange({ target }) {
		if (status.error) validate(target.value);
		setValue(target.value);
	}

	return {
		value,
		onChange,
		setValue,
		status,
		onBlur: () => validate(value),
		validate: () => validate(value)
	};
}

export default useForm;
