import TextField from "./components/LoginForm/LoginForm";
import React from "react";

export const renderTextField = ({ type, name, label, placeholder, input, meta: { touched, invalid, error }, ...custom }) => (
	<TextField
		type={type}
		name={name}
		label={label}
		placeholder={placeholder}
		error={touched && error && true}
		helperText={touched && error}
		margin='none'
		{...input}
		{...custom}
	/>
);