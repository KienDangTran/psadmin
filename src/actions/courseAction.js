/**
 * Created by kien on 9/6/16.
 */

import * as types from "./actionTypes";

export function createCourse(course) {
	return {type: types.CREATE_COURSE, course};
}