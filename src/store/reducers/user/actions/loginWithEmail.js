import firebase from 'firebase';
import {User} from "./index";

export default (email, password) => async dispatch => {
	console.log({email, password});
	try{
		await firebase.auth().signInWithEmailAndPassword(email, password);
	}catch ({message: errorMessage}){
		dispatch({type: User.LOGIN_FAILURE, payload: {errorMessage}})
	}

}