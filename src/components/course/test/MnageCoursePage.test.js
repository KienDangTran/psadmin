import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { ManageCoursePage } from "../ManageCoursePage";

function setup() {
	const props = {
		course: {
			id: "",
			title: "",
			watchHref: "",
			authorId: "",
			length: "",
			category: ""
		},
		authors: [],
		actions: { saveCourse: () => { return Promise.resolve() } }
	};

	return mount(<ManageCoursePage { ...props }/>);
}

describe("Test ManageCoursePage", () => {
	it("set error message when trying to save empty course's title", () => {
		const wraper = setup();
		const saveBtn = wraper.find("input").last();
		saveBtn.simulate("click");
		expect(wraper.state().errors.title).toBe("Title must be at least 5 characters");
	});
});