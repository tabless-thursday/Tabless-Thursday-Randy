import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addUser, loginUser } from '../../store/actions';
// import Auth from '../../hoc/Auth';

class Login extends Component {
	state = {
		username: '',
		password: '',
		error: '',
		isLoggedIn: true,
		enterCredentials: null,
	};

	handleChanges = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitForm = event => {
		event.preventDefault();
		this.props.loginUser(this.state);
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="login-page">
				<form onSubmit={this.submitForm}>
					<header>Login...</header>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={this.state.username}
						onChange={this.handleChanges}
					/>
					<span>{this.state.enterCredentials}</span>
					<input
						type="text"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChanges}
					/>

					<button type="submit">
						<strong>LogIn!</strong>
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userReducer.currentUser,
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ addUser, loginUser },
	)(Login),
);
