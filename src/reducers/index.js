/**
 * Created by kien on 9/6/16.
 */

import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
	courses,
	authors
});

export default rootReducer;