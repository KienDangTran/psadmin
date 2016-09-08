/**
 * Created by kien on 9/5/16.
 */

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseAction from "../../actions/courseAction";

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: {title: ""}
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClicksave = this.onClicksave.bind(this);
	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
	}

	onClicksave() {
		this.props.actions.createCourse(this.state.course);
	}

	courseRow(course, index) {
		return (
			<div key={index}>
				{course.title}
			</div>
		);
	}

	render() {
		return (
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title}
				/>
				<input
					type="submit"
					onClick={this.onClicksave}
					value="Save"
				/>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: React.PropTypes.array.isRequired,
	actions: React.PropTypes.object.isRequired
};

/**
 * what part of the Redux store you want to expose on your component
 * @param state
 * @param ownProps
 * @returns an object, each property of return obj => a property of component
 */
function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

/**
 * specify what actions we want to expose as props to ur component
 * @param dispatch
 * @returns {{actions: *}}
 */
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);