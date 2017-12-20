// @flow

import {
	lifecycle,
	compose,
	withHandlers,
	withPropsOnChange,
	type HOC, withState
} from 'recompose';
import withUser from '../../store/reducers/user'


export type LoginPageProps = {
	user: string,
	password: string,
	update: (updatedState: {email: string, password: string}) => void,
	onSubmit: () => void,
}



const enhancer: HOC<*, LoginPageProps> = compose(
	withUser,
	withState('state', 'setState', {email: '', password: ''}),
	withHandlers({
		update: ({setState, state}) => (updatedState) => {
			setState({...state, ...updatedState});
		},
		onSubmit: ({state: {email, password}, userActions: {loginWithEmail: login}}) => () => {
			login(email, password);
		}
	})

);


export default enhancer;