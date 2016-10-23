/**
 * Created by kien on 9/9/16
 */

import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({ course, allAuthors, disabled, errors, onSave, onChange }) => {
	return (
		<form>
			<h1>Manage Course</h1>
			<TextInput
				name="title"
				label="Title"
				value={ course.title }
				error={ errors.title }
				onChange={ onChange }
				disabled={ disabled }
			/>
			<SelectInput
				name="authorId"
				label="Author"
				value={ course.authorId }
				defaultOption="Select Author"
				options={ allAuthors }
				error={ errors.authorId }
				onChange={ onChange }
				disabled={ disabled }
			/>
			<TextInput
				name="category"
				label="Category"
				value={ course.category }
				error={ errors.category }
				onChange={ onChange }
				disabled={ disabled }
			/>
			<TextInput
				name="length"
				label="Length"
				value={ course.length }
				error={ errors.length }
				onChange={ onChange }
				disabled={ disabled }
			/>
			<input
				type="submit"
				disabled={ disabled }
				value={ disabled
					? "Saving..."
					: "Save" }
				className="btn btn-primary btn-lg"
				onClick={ onSave }
			/>
		</form>
	);
};

CourseForm.propTypes = {
	course: React.PropTypes.object.isRequired,
	allAuthors: React.PropTypes.array,
	disabled: React.PropTypes.bool,
	errors: React.PropTypes.object,
	onSave: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired
};

export default CourseForm;
