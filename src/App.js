import React, { Component } from 'react';

//components
import Login from './components/Login';
import Auth from './Auth';
import Routes from './routes/routes';

//styles
import './styles/css/index.css';

class App extends Component {
	render() {
		return (
			<div>
				<Routes />
			</div>
		);
	}
}

export default Auth(App)(Login);
