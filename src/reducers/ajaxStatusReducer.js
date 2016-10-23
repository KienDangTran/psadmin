import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndInSuccess(type) {
	return type.substring(type.length - 8) === "_SUCCESS";
}

export default function courseReducer(state = initialState.numberAjaxCallsInProgress, action) {
	if (action.type === types.BEGIN_AJAX_CALL) {
		return state + 1;
	} else if (actionTypeEndInSuccess(action.type) || action.type === types.AJAX_CALL_ERROR) {
		return state - 1;
	}
	return state;
}
