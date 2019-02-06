import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/css/index.css';

import Layout from '../hoc/Layout';
import Home from '../components/Home/home';
import TabsList from '../components/Tabs/TabsList';
import Login from '../containers/Admin/Login';
import Register from '../containers/Admin/Register';
import Logout from '../containers/Admin/Logout';
import TabsInput from '../components/Tabs/TabsInput';
import Auth from '../Auth';

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact component={Auth(Home, null)} />
				<Route path="/login" exact component={Auth(Login, false)} />
				<Route path="/user/logout" exact component={Auth(Logout, true)} />
				<Route path="/user/tabslist" exact component={Auth(TabsList, true)} />
				<Route path="/user/addtab" exact component={Auth(TabsInput, true)} />
				<Route path="/user/register" exact component={Auth(Register, true)} />
			</Switch>
		</Layout>
	);
};

export default Routes;
