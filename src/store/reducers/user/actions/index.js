import loginWithEmail from './loginWithEmail';
import '../../../../db/firebase';
import firebase from "firebase";

const NAME = 'User.';
export const User = {
	LOGIN_SUCCESS: NAME + "LOGIN_SUCCESS",
	LOGIN_FAILURE: NAME + "LOGIN_FAILURE",
	SELECT_GENDER: NAME + "SELECT_GENDER",
};

export const addAuthorizationListener = () => (dispatch) => {
	firebase.auth().onAuthStateChanged(async (user) =>  {
		if (user) {
			const userRoleRef = await firebase.database().ref(`users/${user.uid}`).once('value');
			const userParams = userRoleRef.val();
			dispatch({type: User.LOGIN_SUCCESS, payload: {user, loggedIn: true, userParams}});
		} else {
			dispatch({type: User.LOGIN_FAILURE, payload: {user: null, loggedIn: false}});
		}
	});
};


export const logout = () => (dispatch) => {
	firebase.auth().signOut();
};

export {
	loginWithEmail
}