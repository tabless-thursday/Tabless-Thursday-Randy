import React, { Component } from 'react';
import { auth } from '../store/actions';
import { connect } from 'react-redux';

export default function(WrappedComponent, reload) {
	class Auth extends Component {
		state = {
			loading: false,
		};

		componentWillMount() {
			this.props.auth();
		}

		componentWillReceiveProps(nextProps) {
			this.setState({ loading: false });

			if (!nextProps.currentUser) {
				if (reload) {
					this.props.history.push('/login');
				}
			} else {
				if (reload === false) {
					this.props.history.push('/');
				}
			}
		}
		render() {
			if (this.state.loading) {
				return <div>Loading...</div>;
			}
			return <WrappedComponent {...this.props} users={this.props.users} />;
		}
	}
	const mapStateToProps = state => {
		return {
			users: state.userReducer.users,
			currentUser: state.userReducer.currentUsers,
		};
	};
	return connect(
		mapStateToProps,
		{ auth },
	)(Auth);
}
