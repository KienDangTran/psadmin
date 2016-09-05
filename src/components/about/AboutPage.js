/**
 * Created by kien on 9/5/16.
 */

import React from "react";

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<p>
					Install Node 6. Need to run multiple versions of Node? Use nvm or nvm-windows
					Clone this repository. - git clone https://github.com/coryhouse/pluralsight-redux-starter.git or
					download the zip
					Make sure you're in the directory you just created. - cd pluralsight-redux-starter
					Install Node Packages. - npm install
					Run the app. - npm start -s This will run the automated build process, start up a webserver, and
					open the application in your default browser. When doing development with this kit, this command
					will continue watching files all your files. Every time you hit save the code is rebuilt, linting
					runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which
					suppresses unnecessary messages during the build.
					Install React developer tools and Redux Dev Tools in Chrome.
					Having issues? See below.
					Having Issues? Try these things first:

					Run npm install - If you forget to do this, you'll see this: babel-node: command not found.
					Make sure the path doesn't include any spaces, or install the latest version of eslint-watch which
					adds support for paths containing spaces: npm install eslint-watch@2.1.13
					Make sure you're running the latest version of Node.
					Use Node 5.12.0 if you're having issues on Windows. Node 6 has issues on some Windows machines.
					Don't run the project from a symbolic link. It will cause issues with file watches.
				</p>
			</div>
		);
	}
}

export default AboutPage;