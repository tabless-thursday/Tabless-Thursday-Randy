import React from 'react';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
	return (
		<div className={classes.root}>
			<AppBar position="sticky" style={{ marginBottom: '20px' }}>
				<Toolbar>
					<IconButton
						className={classes.menuButton}
						color="inherit"
						aria-label="Menu">
						<MenuIcon style={{ fontSize: '30px' }} />
					</IconButton>
					<Typography
						variant="h6"
						color="inherit"
						className={classes.grow}
						style={{ fontSize: '30px' }}>
						Tabless-Thursday
					</Typography>
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
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withRouter(withStyles(styles)(Navigation));
