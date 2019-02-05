import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/css/index.css';

import Layout from '../hoc/Layout';

import TabsList from '../components/Tabs/TabsList';
import Login from '../components/Login';

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/" component={TabsList} />
			</Switch>
		</Layout>
	);
};

export default Routes;
