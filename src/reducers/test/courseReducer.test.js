import expect from "expect";
import courseReducer from "../courseReducer";
import * as courseAction from "../../actions/courseActions";

describe("Course Reducer", () => {
	it("should add course when passed CREATE_COURSE_SUCCESS", () => {
		const initialState = [
			{ id: "1", title: "A" },
			{ id: "2", title: "B" }
		];
		const newCourse = { id: "3", title: "C" };
		const action = courseAction.createCourseSuccess(newCourse);
		const newState = courseReducer(initialState, action);

		expect(newState.length).toEqual(3);
		expect(newState[2].id).toEqual("3");
		expect(newState[2].title).toEqual("C");
	});
	it("should add course when passed UPDATE_COURSE_SUCCESS", () => {
		const initialState = [
			{ id: "1", title: "A" },
			{ id: "2", title: "B" }
		];
		const course = { id: "2", title: "C" };
		const action = courseAction.updateCourseSuccess(course);
		const newState = courseReducer(initialState, action);

		expect(newState[1].title).toEqual("C");
	});
});