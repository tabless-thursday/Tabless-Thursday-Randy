import React, { PureComponent } from 'react';
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

class Register extends PureComponent {
	state = {
		user: {
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			password: '',
			username: '',
		},
		errorMSG: 'Register',
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.user === false) {
	// 		this.setState({ errorMSG: 'Error,try again' });
	// 	} else {
	// 		this.setState({
	// 			user: {
	// 				first_name: '',
	// 				last_name: '',
	// 				email: '',
	// 				phone: '',
	// 				password: '',
	// 				username: '',
	// 			},
	// 			errorMSG: 'Register',
	// 		});
	// 	}
	// }

	submitForm = event => {
		event.preventDefault();
		const newUser = {
			first_name: this.state.user.first_name,
			last_name: this.state.user.last_name,
			email: this.state.user.email,
			password: this.state.user.password,
			username: this.state.user.username,
		};
		if (!this.state.password) {
			this.setState({
				errorMSG: 'You must enter a password to continue.',
			});
		} else {
			this.props.dispatch(userRegister(newUser));
			this.props.dispatch(loginUser(newUser));
			this.setState({
				user: {
					first_name: this.state.user.first_name,
					last_name: this.state.user.last_name,
					email: this.state.user.email,
					password: this.state.user.password,
					username: this.state.user.username,
				},
				errorMSG: 'Register',
			});
			this.props.history.push('/');
		}
	};

	showUsers = users =>
		users
			? users.map(item => (
					<tr key={item.id}>
						<td>{item.first_name}</td>
						<td>{item.last_name}</td>
						<td>{item.email}</td>
					</tr>
			  ))
			: null;

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
