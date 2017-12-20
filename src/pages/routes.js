import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import firebase from 'firebase';
import Page from './components/Page';
import withUser from '../store/reducers/user';
import ApplicationsPage from './ApplicationsPage';
import History from './History';
import Notifications from './Notifications';
import LoginPage from './LoginPage';
import {branch, renderComponent} from 'recompose'



const onlyAuthenticated = (component) =>
	branch(
		() => !firebase.auth().currentUser,
		renderComponent(LoginPage),
		renderComponent(component)
	)();



class Routes extends Component {

	componentDidMount = () => {
		this.props.userActions.addAuthorizationListener();
	};

	render() {
		return (
				<Router>
					<Page>
						<Route exact path="/" component={onlyAuthenticated(ApplicationsPage)}/>
						<Route exact path="/history" component={onlyAuthenticated(History)}/>
						<Route exact path="/notifications" component={onlyAuthenticated(Notifications)}/>
					</Page>
				</Router>

		);
	}
}

export default withUser(Routes);
