import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Logout = props => {
	localStorage.removeItem('user', props.currentUser);
	setTimeout(() => {
		props.history.push('/');
	}, 2000);
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

export default withRouter(connect(mapStateToProps)(Logout));
