import expect from "expect";
import thunk from "redux-thunk";
import nock from "nock";
import configureStore from "redux-mock-store";
import * as courseActions from "../courseActions";
import * as types from "../actionTypes";

describe("Test syn course actions", () => {
	describe("createCourseAction", () => {
		it("should create a CREATE_COURSE_SUCCESS action", () => {
			const course = { id: "clean-code", title: "Clean Code" };
			const expectedAction = { course: course, type: types.CREATE_COURSE_SUCCESS };
			const action = courseActions.createCourseSuccess(course);
			expect(action).toEqual(expectedAction);
		});
	});
});

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe("Async Actions", () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it("should create BEGIN_AJAX_CALL & LOAD_COURSES_SUCCESS when loading courses", (done) => {
		const expectedAction = [
			{ type: types.BEGIN_AJAX_CALL },
			{ type: types.LOAD_COURSES_SUCCESS, body: { courses: [{ id: "clean-code", title: "Clean Code" }] } }
		];
		const store = mockStore({ courses: [] });
		expectedAction.map((action) => {
			store.dispatch(action);
		});
		const actions = store.getActions();
		expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
		expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
		expect(actions[1].body.courses[0].id).toEqual("clean-code");

		done();
	});
});