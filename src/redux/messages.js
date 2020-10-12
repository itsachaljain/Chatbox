import * as ActionTypes from "./ActionTypes";

export const Messages = (
	state = {
		errMess: null,
		messages: [],
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.POST_MESSAGE:
			return { ...state, messages: state.messages.concat(message) };

		case ActionTypes.FAILED_MESSAGES:
			return { ...state, errMess: action.payload };

		case ActionTypes.LOAD_MESSAGES:
			return { ...state, errMess: null, messages: action.payload };

		default:
			return state;
	}
};
