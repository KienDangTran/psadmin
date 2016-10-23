/**
 * Created by kien on 9/9/16
 */

import React from "react";

const TextInput = ({ name, label, placeholder, value, error, onChange, disabled, readOnly }) => {
	let wrapperClass = "form-group";
	if (error && error.length > 0) {
		wrapperClass += " has-error";
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<input
					type="text"
					name={ name }
					className="form-control"
					placeholder={ placeholder }
					value={ value }
					onChange={ onChange }
					disabled={ disabled }
					readOnly={ readOnly }
				/>
				{
					error && error.length > 0
						? <div className="alert alert-danger">{error}</div>
						: null
				}
			</div>
		</div>
	);
};

TextInput.propTypes = {
	name: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string,
	value: React.PropTypes.string,
	error: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired,
	disabled: React.PropTypes.bool,
	readOnly: React.PropTypes.bool
};

export default TextInput;
