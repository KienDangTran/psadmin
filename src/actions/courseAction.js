/**
 * Created by kien on 9/6/16.
 */

import * as types from "./actionTypes";
import CourseApi from "../api/mockCourseApi";

function loadCoursesSuccess(courses) {
	return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
	return (dispatch) => {
		return CourseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses));
		}).catch(error => {
			throw error;
		});
	};
}

export function createCourse(course) {
	return {type: types.CREATE_COURSE, course};
}