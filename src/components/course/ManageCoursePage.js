/**
 * Created by kien on 9/9/16.
 */

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions/courseActions";
import CourseForm from "./CourseForm";

class ManageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: Object.assign({}, props.course),
			errors: {}
		};

		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.course.id !== nextProps.course.id) {
			this.setState({
				course: Object.assign({}, nextProps.course)
			});
		}
	}

	saveCourse(event) {
		event.preventDefault();
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push("/courses");
	}

	updateCourseState(event) {
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		return this.setState({course: course});
	}

	render() {
		return (
			<CourseForm
				course={this.state.course}
				allAuthors={this.props.authors}
				errors={this.state.errors}
				onSave={this.saveCourse}
				onChange={this.updateCourseState}/>
		);
	}
}

ManageCoursePage.propTypes = {
	course: React.PropTypes.object.isRequired,
	authors: React.PropTypes.array.isRequired,
	actions: React.PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
	router: React.PropTypes.object
};

function getCourseById(courses, courseId) {
	const courseFilterResult = courses.filter(course => course.id === courseId);
	if (courseFilterResult && courseFilterResult.length > 0) return courseFilterResult[0];
	return null;
}

function mapStateToProps(state, ownProps) {
	let course = {
		id: "",
		title: "",
		watchHref: "",
		authorId: "",
		length: "",
		category: ""
	};
	const courseId = ownProps.params.id;
	if (courseId && state.courses.length > 0) {
		course = getCourseById(state.courses, courseId);
	}

	const authorFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + " " + author.lastName
		};
	});

	return {
		course: course,
		authors: authorFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);