/**
 * Created by kien on 9/9/16
 */

import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({course, allAuthors, loading, errors, onSave, onChange}) => {
	return (
		<form>
			<h1>Manage Course</h1>
			<TextInput
				name="title"
				label="Title"
				value={course.title}
				error={errors.title}
				onChange={onChange}/>
			<SelectInput
				name="authorId"
				label="Author"
				value={course.authorId}
				defaultOption="Select Author"
				options={allAuthors}
				error={errors.authorId}
				onChange={onChange}/>
			<TextInput
				name="category"
				label="Category"
				value={course.category}
				error={errors.category}
				onChange={onChange}/>
			<TextInput
				name="length"
				label="Length"
				value={course.length}
				error={errors.length}
				onChange={onChange}/>
			<input
				type="submit"
				disabled={loading}
				value={loading
					? "Saving..."
					: "Save"}
				className="btn btn-primary btn-lg"
				onClick={onSave}/>
		</form>
	);
};

CourseForm.propTypes = {
	course: React.PropTypes.object.isRequired,
	allAuthors: React.PropTypes.array,
	loading: React.PropTypes.bool,
	errors: React.PropTypes.object,
	onSave: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired
};

export default CourseForm;