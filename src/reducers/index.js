/**
 * Created by kien on 9/6/16.
 */

import {combineReducers} from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
	courses
});

export default rootReducer;