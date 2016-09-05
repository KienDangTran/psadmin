/**
 * Created by kien on 9/5/16.
 */

import React from "react";
import {Link} from "react-router";


class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>PS Administration</h1>
				<p>React, Redux & React Router in ES6</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		);
	}
}

export default HomePage;