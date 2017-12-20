import { User } from './actions';


const initialState = {
	user: null,
	userParams: null,
	errorMessage: null,
	logged: undefined,
	gender: undefined,
};


const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case User.LOGIN_SUCCESS:
		case User.LOGIN_FAILURE:
		case User.SELECT_GENDER:
			return {
				...state,
				...payload,
			};
		default:
			return state
	}
};


export default reducer;