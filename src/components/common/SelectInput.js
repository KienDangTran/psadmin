/**
 * Created by kien on 9/9/16
 */

import React from "react";

const SelectInput = ({name, label, value, error, options, defaultOption, onChange}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<select
					name={name}
					value={value}
					className="form-control"
					onChange={onChange}>
					<option value="">{defaultOption}</option>
					{
						options.map((option, index) => {
							return (
								<option key={index} value={option.value}>{option.text}</option>
							);
						})
					}
				</select>
			</div>
		</div>
	);
};

SelectInput.propTypes = {
	name: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	error: React.PropTypes.string,
	defaultOption: React.PropTypes.string,
	options: React.PropTypes.arrayOf(React.PropTypes.object),
	onChange: React.PropTypes.func.isRequired
};

export default SelectInput;