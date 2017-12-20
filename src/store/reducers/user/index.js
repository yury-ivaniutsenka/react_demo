import {loginWithEmail, logout, addAuthorizationListener} from './actions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const enhancer = connect(
	state => ({
		user: state.user,
	}),
	dispatch => ({
		userActions: {
			loginWithEmail: (email, password) => dispatch(loginWithEmail(email, password)),
			addAuthorizationListener: () => dispatch(addAuthorizationListener()),
			logout: () => dispatch(logout()),
		}
	})
);

export const propTypes = {
	login: PropTypes.func,
	user: PropTypes.array,
};


export default enhancer;