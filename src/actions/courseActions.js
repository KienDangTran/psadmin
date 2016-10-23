import * as types from "./actionTypes";
import CourseApi from "../api/mockCourseApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

function loadCoursesSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

function createCourseSuccess(course) {
	return { type: types.CREATE_COURSE_SUCCESS, course };
}

function updateCourseSuccess(course) {
	return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return CourseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses));
		}).catch(error => {
			throw error;
		});
	};
}

export function saveCourse(course) {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return CourseApi.saveCourse(course).then(course => {
			course.id
				? dispatch(updateCourseSuccess(course))
				: dispatch(createCourseSuccess(course));
		}).catch(error => {
			dispatch(ajaxCallError(error));
			throw error;
		});
	};
}
