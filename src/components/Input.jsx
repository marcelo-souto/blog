import React from 'react';
import { TextField, FormHelperText } from '@mui/material';

const Input = ({
	id,
	label,
	variant,
	size,
	status,
	onChange,
	onBlur,
	value,
	setValue,
	error,
	...props
}) => {
	return (
		<div>
			<TextField
				id={id}
				label={label}
				variant={variant}
				size={'small' || size}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				{...props}
				error={status?.error ? true : false || error}
			/>
			{status?.error || error && (
				<FormHelperText sx={{ color: 'error.main' }}>
					{status?.error || error}
				</FormHelperText>
			)}
		</div>
	);
};

export default Input;
