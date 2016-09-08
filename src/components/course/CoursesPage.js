/**
 * Created by kien on 9/5/16.
 */

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseAction from "../../actions/courseAction";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
	render() {
		return (
			<div>
				<h1>Courses</h1>
				{
					<CourseList courses={this.props.courses}/>
				}
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