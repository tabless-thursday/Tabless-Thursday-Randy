import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addUser } from '../../store/actions';

class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	handleChanges = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	setUserOnStorage = event => {
		event.preventDefault();
		const user = this.state.username;

		if (this.state.username) {
			localStorage.setItem('user', user);
		} else {
			return <div>enter credentials</div>;
		}
	};

	render() {
		return (
			<div className="login-page">
				<form>
					<header>Login...</header>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={this.state.username}
						onChange={this.handleChanges}
					/>

					<input
						type="text"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChanges}
					/>

					<button onClick={this.setUserOnStorage}>
						<strong>LogIn!</strong>
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.tabsReducer.users,
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ addUser },
	)(Login),
);
