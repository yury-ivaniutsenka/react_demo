import React from 'react';
import ReduxProvider from './store';
import Routes from './pages/routes';

import './App.css';
import './db/firebase'


const App = () =>
	<ReduxProvider>
		<Routes/>
	</ReduxProvider>;

export default App;
