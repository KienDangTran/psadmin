import expect from "expect";
import {createStore} from "redux";
import rootReducer from "../../reducers";
import initialState from "../../reducers/initialState";
import * as courseActions from "../../actions/courseActions";

describe("Test Store", () => {
	it("Should handle creating courses", () => {
		const store = createStore(rootReducer, initialState);
		const course = {
			id: "1",
			title: "React"
		};

		//act
		const action = courseActions.createCourseSuccess(course);
		store.dispatch(action);

		// assert
		const actualCourse = store.getState().courses[0];
		expect(actualCourse).toEqual(course);
	});
});