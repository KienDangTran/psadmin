/**
 * Created by kien on 9/9/16.
 */

import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";

function loadAuthorsSuccess(authors) {
	return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
	return (dispatch) => {
		return AuthorApi.getAllAuthors().then(authors => {
			dispatch(loadAuthorsSuccess(authors));
		}).catch(error => {
			throw error;
		});
	};
}
