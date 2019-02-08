import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { removeTab } from '../../store/actions';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const styles = theme => ({
	bigAvatar: {
		margin: 15,
		width: 50,
		height: 50,
	},
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 60,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none',
	},
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(25),
		flexBasis: '33.33%',
		flexShrink: 0,
		display: 'flex',
		alignItems: 'center',
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
});

class Tab extends React.Component {
	state = {
		expanded: null,
		currentTab: '',
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
		});
	};
	deleteTabs = id => {
		this.props.removeTab(id);
		this.handleClose();
		this.setState({
			expanded: false,
		});
	};

	render() {
		const { classes } = this.props;
		const { expanded } = this.state;

		return (
			<div className={classes.root}>
				<ExpansionPanel
					expanded={expanded === 'panel1'}
					onChange={this.handleChange('panel1')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Avatar alt="" src="" className={classes.bigAvatar} />
							{this.props.tab.url}
						</div>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Fab
							onClick={this.handleOpen}
							aria-label="Delete"
							className={classes.fab}
							style={{ display: 'flex', alignItems: 'center' }}>
							<DeleteIcon />
						</Fab>

						<Modal
							aria-labelledby="simple-modal-title"
							aria-describedby="simple-modal-description"
							open={this.state.open}
							onClose={this.handleClose}>
							<div style={getModalStyle()} className={classes.paper}>
								<Typography variant="h4">
									Are you sure you want to delete this tab?
								</Typography>
								<Button
									color="primary"
									onClick={() => this.deleteTabs(this.props.tab.id)}>
									<Typography variant="h6">Yes</Typography>
								</Button>
								<Button color="secondary" onClick={this.handleClose}>
									<Typography variant="h6">No!</Typography>
								</Button>
							</div>
						</Modal>
						<Typography />
					</ExpansionPanelDetails>
				</ExpansionPanel>
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
	{ removeTab },
)(withStyles(styles)(Tab));

// to get the favicon document.querySelector('link').href
