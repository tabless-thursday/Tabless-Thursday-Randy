import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import TextField from '@material-ui/core/TextField';
import { addTab } from '../../store/actions';
import { connect } from 'react-redux';

const styles = theme => ({
	fab: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
});

class TabsInput extends Component {
	state = {
		tabURL: '',
		tabTitle: '',
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addNewTab = event => {
		event.preventDefault();
		const newTab = {
			createdOn: '',
			url: this.state.tabURL,
			title: this.state.tabTitle,
			img: '',
		};
		this.props.addTab(newTab);
		this.setState({
			tabURL: '',
			tabTitle: '',
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<TextField
					style={{ margin: '15px', width: '500px' }}
					variant="outlined"
					name="tabURL"
					value={this.state.tabURL}
					onChange={this.handleInputChange}
					placeholder="copy and paste url"
					required
				/>
				<Fab
					color="primary"
					aria-label="Add"
					onClick={this.addNewTab}
					className={classes.fab}>
					<AddIcon />
				</Fab>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		tabs: state.tabsReducer.tabs,
	};
};

export default connect(
	mapStateToProps,
	{ addTab },
)(withStyles(styles)(TabsInput));
