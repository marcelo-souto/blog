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
	...props
}) => {
	return (
		<div>
			<TextField
				id={id}
				label={label}
				variant={variant}
				size={size}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				{...props}
				error={status.error ? true : false}
			/>
			{status.error && (
				<FormHelperText sx={{ color: 'error.main' }}>
					{status.error}
				</FormHelperText>
			)}
		</div>
	);
};

export default Input;
