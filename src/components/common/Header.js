/**
 * Created by kien on 9/5/16.
 */

import React from "react";
import {Link, IndexLink} from "react-router";

const Header = () => {
	return (
		<nav className="nav nav-default">
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="/courses" activeClassName="active">Courses</Link>
			{" | "}
			<Link to="/about" activeClassName="active">About Us</Link>
		</nav>
	);
};

export default Header;