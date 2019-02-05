import React, { Component } from 'react';
import HomeView from './containers/HomeView';
import NavigationView from './containers/NavigationView';
import TabsList from './components/Tabs/TabsList';

class App extends Component {
	render() {
		return (
			<div>
				<NavigationView />
				{/* <HomeView /> */}
				<TabsList />
			</div>
		);
	}
}

export default App;
