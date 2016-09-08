/**
 * Created by kien on 9/8/16.
 */

import React from "react";

const CourseListRow = ({course}) => {
	console.log(course);
	return (
		<tr>
			<td><a href={course.watchHref}>Watch</a></td>
			<td><a href="#">{course.title}</a></td>
			<td>{course.authorId}</td>
			<td>{course.category}</td>
			<td>{course.length}</td>
		</tr>
	);
};

CourseListRow.propTypes = {
	course: React.PropTypes.object.isRequired
};

export default CourseListRow;