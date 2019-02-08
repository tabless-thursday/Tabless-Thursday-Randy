import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import Auth from '../hoc/Auth';

import '../styles/css/index.css';

import Layout from '../hoc/Layout';
import Home from '../components/Home/home';

import Login from '../containers/Admin/Login';
import Register from '../containers/Admin/Register';
import Logout from '../containers/Admin/Logout';

class Routes extends Component {
	state = {
		isLoggedIn: null,
	};
	componentwillMount() {
		this.setState({
			isLoggedIn: this.props.isLoggedIn,
		});
	}
	render() {
		let routes;

		if (this.props.isLoggedIn) {
			routes = (
				<Switch>
					<Redirect from="/login" to="/" />
					<Redirect from="/register" to="/" />
					<Route path="/logout" component={Logout} />
					<Route exact path="/" component={Home} />
				</Switch>
			);
		} else {
			routes = (
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			);
		}
		return <Layout showProtectedLinks={this.props.isLoggedIn}>{routes}</Layout>;
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.userReducer.isLoggedIn,
	};
};

export default withRouter(connect(mapStateToProps)(Routes));
