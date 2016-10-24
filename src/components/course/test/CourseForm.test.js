import React from "react";
import { shallow } from "enzyme";
import expect from "expect";
import CourseForm from "../CourseForm";

function setup(disabled) {
	const props = {
		course: {},
		allAuthors: [],
		disabled: disabled,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};

	return shallow(<CourseForm {...props}/>);
}

describe("CourseForm Testing via Enzyme", () => {

	it("renders form & h1", () => {
		const wrapper = setup(false);
		expect(wrapper.find("form").length).toBe(1);
	});

	it("save button is labeled 'Save' when not saving", () => {
		const wrapper = setup(false);
		expect(wrapper.find("input").props().value).toBe("Save");
	});

	it("save button is labeled 'Saving...' when saving", () => {
		const wrapper = setup(true);
		expect(wrapper.find("input").props().value).toBe("Saving...");
	});
});
