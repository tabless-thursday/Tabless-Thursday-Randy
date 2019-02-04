import React, { Component } from 'react';
import HomeView from './containers/HomeView';
import NavigationView from './containers/NavigationView';

class App extends Component {
	render() {
		return (
			<div>
				<NavigationView />
				<HomeView />
			</div>
		);
	}
}

export default App;
