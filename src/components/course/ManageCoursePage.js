import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/courseActions";
import CourseForm from "./CourseForm";
import toastr from "toastr";
import { authorFormattedForDropdown } from "../../selectors/selectors";

export class ManageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: Object.assign({}, props.course),
			errors: {},
			saving: false
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
		if (!this.courseFormIsValid()) { return; }
		this.setState({ saving: true });
		this.props.actions.saveCourse(this.state.course)
			.then(() => this.redirect())
			.catch(error => {
				toastr.error(error);
				this.setState({ saving: false });
			});
	}

	courseFormIsValid() {
		let isValid = true;
		let errors = {};

		if (this.state.course.title.length < 5) {
			errors.title = "Title must be at least 5 characters";
			isValid = false;
		}
		this.setState({ errors: errors });
		return isValid;
	}

	redirect() {
		this.setState({ saving: false });
		toastr.success("Course saved");
		this.context.router.push("/courses");
	}

	updateCourseState(event) {
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		return this.setState({ course: course });
	}

	render() {
		return (
			<CourseForm
				course={ this.state.course }
				allAuthors={ this.props.authors }
				errors={ this.state.errors }
				onSave={ this.saveCourse }
				onChange={ this.updateCourseState }
				disabled={ this.state.saving }
			/>
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

	return {
		course: course,
		authors: authorFormattedForDropdown(state.authors)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
