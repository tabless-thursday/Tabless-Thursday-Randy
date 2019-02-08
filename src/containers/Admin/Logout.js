import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions';

const Logout = props => {
	props.logoutUser(localStorage.getItem('user'));
	setTimeout(() => {
		props.history.push('/login');
	}, 1000);

	return (
		<div>
			<h1>Sorry to see you go :(</h1>
		</div>
	);
};
const mapStateToProps = state => {
	return {
		currentUser: state.userReducer.currentUser,
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ logoutUser },
	)(Logout),
);
