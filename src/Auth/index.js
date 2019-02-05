import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const Auth = App => NotAuthorized =>
	class extends Component {
		state = {
			loggedIn: null,
		};

		componentDidMount() {
			if (localStorage.getItem('user')) {
				this.setState({
					loggedIn: true,
				});
			} else {
				this.setState({
					loggedIn: false,
				});
			}
		}

		loginFailed = () => {
			if (this.state.loggedIn === false) {
				return <NotAuthorized />;
			} else {
				this.props.history.push('/');
			}
		};

		render() {
			return this.loginFailed();
		}
	};

const mapStateToProps = state => {
	return {
		users: state.tabsReducer.users,
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{},
	)(Auth),
);
