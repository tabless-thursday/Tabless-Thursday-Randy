import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../../store/actions';

class Register extends PureComponent {
	state = {
		isAuth: false,
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		password: '',
		username: '',
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.user === false) {
			this.setState({ error: 'Error,try again' });
		} else {
			this.setState({
				first_name: '',
				last_name: '',
				email: '',
				phone: '',
				password: '',
				username: '',
			});
		}
	}

	submitForm = event => {
		event.preventDefault();
		this.setState({ error: '' });

		this.props.dispatch(userRegister(this.state));
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
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<h2>Add user</h2>

					<div>
						<input
							name="first_name"
							type="text"
							placeholder="Enter First Name"
							value={this.state.first_name}
							onChange={this.handleInputChange}
						/>
					</div>

					<div>
						<input
							name="last_name"
							type="text"
							placeholder="Enter Last Name"
							value={this.state.last_name}
							onChange={this.handleInputChange}
						/>
					</div>

					<div>
						<input
							name="email"
							type="email"
							placeholder="Enter Email"
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
					</div>

					<div>
						<input
							name="password"
							type="password"
							placeholder="Enter Password"
							value={this.state.password}
							onChange={this.handleInputChange}
						/>
					</div>
					<div>
						<input
							name="phone"
							type="phone"
							placeholder="Enter Phone Number"
							value={this.state.phone}
							onChange={this.handleInputChange}
						/>
					</div>

					<div>
						<input
							name="username"
							type="text"
							placeholder="Choose a username"
							value={this.state.username}
							onChange={this.handleInputChange}
						/>
					</div>

					<button type="submit">Add user</button>
					<div>{this.state.error}</div>
				</form>
				<div>
					<h4>Current users:</h4>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Lastname</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>{this.showUsers(this.props.users)}</tbody>
					</table>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		user: state.userReducer.user,
	};
};

export default connect(mapStateToProps)(Register);
