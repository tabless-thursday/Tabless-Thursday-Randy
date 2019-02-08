import React from 'react';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

const Navigation = props => {
	const { classes } = props;

	const sendToLogin = () => {
		props.history.push('/login');
	};
	const sendToRegisterForm = () => {
		props.history.push('/register');
	};
	const sendToLogout = () => {
		props.history.push('/logout');
	};
	const renderNavBtn = () => {
		if (localStorage.getItem('user')) {
			return (
				<Button
					onClick={sendToLogout}
					style={{ fontSize: '15px' }}
					color="inherit">
					Logout
				</Button>
			);
		} else {
			return (
				<div>
					<Button
						onClick={sendToLogin}
						style={{ fontSize: '15px' }}
						color="inherit">
						Login
					</Button>
					<Button
						onClick={sendToRegisterForm}
						style={{ fontSize: '15px' }}
						color="inherit">
						Register
					</Button>
				</div>
			);
		}
	};
	return (
		<div className={classes.root}>
			<AppBar position="sticky" style={{ marginBottom: '20px' }}>
				<Toolbar>
					<Typography
						variant="h6"
						color="inherit"
						className={classes.grow}
						style={{ fontSize: '30px' }}>
						Tabless-Thursday
					</Typography>
					{/* <Button
						onClick={sendToLogin}
						style={{ fontSize: '15px' }}
						color="inherit">
						Login
					</Button>
					<Button
						onClick={sendToLogout}
						style={{ fontSize: '15px' }}
						color="inherit">
						Logout
					</Button>
					<Button
						onClick={sendToRegisterForm}
						style={{ fontSize: '15px' }}
						color="inherit">
						Register
					</Button> */}
					{renderNavBtn()}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withRouter(withStyles(styles)(Navigation));
