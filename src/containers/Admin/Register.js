import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { userRegister, loginUser } from '../../store/actions';

const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		fontSize: '20px',
	},
	button: {
		margin: theme.spacing.unit,
	},
	textField: {
		width: 200,
	},
});

class Register extends Component {
	state = {
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		password: '',
		username: '',

		errorMSG: 'Register',
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitForm = event => {
		event.preventDefault();
		let newUser = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			username: this.state.username,
		};
		if (!this.state.password) {
			this.setState({
				errorMSG: 'You must enter a password to continue.',
			});
		} else {
			this.setState({
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				email: this.state.email,
				password: this.state.password,
				username: this.state.username,

				errorMSG: 'Register',
			});

			newUser = {
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				email: this.state.email,
				password: this.state.password,
				username: this.state.username,
			};

			this.props.dispatch(userRegister(newUser));
			this.props.dispatch(loginUser(newUser));
			this.props.history.push('/');
		}
	};
	render() {
		const { classes } = this.props;
		return (
			<form
				className={classes.container}
				noValidate
				autoComplete="off"
				onSubmit={this.submitForm}>
				<h2>{this.state.errorMSG}</h2>

				<TextField
					required
					label="First Name"
					name="first_name"
					className={classes.textField}
					value={this.state.first_name}
					onChange={this.handleInputChange}
					type="text"
				/>

				<TextField
					required
					label="Last Name"
					name="last_name"
					className={classes.textField}
					value={this.state.last_name}
					onChange={this.handleInputChange}
					type="text"
				/>

				<TextField
					required
					label="Email"
					name="email"
					className={classes.textField}
					value={this.state.email}
					onChange={this.handleInputChange}
					type="text"
				/>

				<TextField
					required
					label="Password"
					name="password"
					className={classes.textField}
					value={this.state.password}
					onChange={this.handleInputChange}
					type="text"
				/>

				<TextField
					required
					label="Phone Number"
					name="phone"
					className={classes.textField}
					value={this.state.phone}
					onChange={this.handleInputChange}
					type="number"
				/>

				<TextField
					required
					label="Username"
					name="username"
					className={classes.textField}
					value={this.state.username}
					onChange={this.handleInputChange}
					type="text"
				/>

				<Button
					size="large"
					type="submit"
					variant="contained"
					color="primary"
					className={classes.button}>
					Register
				</Button>
			</form>
		);
	}
}
const mapStateToProps = state => {
	return {
		users: state.userReducer.users,
	};
};

export default withRouter(
	connect(mapStateToProps)(withStyles(styles)(Register)),
);
