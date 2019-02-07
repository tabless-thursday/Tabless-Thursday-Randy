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

import { removeTab } from '../../store/actions';

const styles = theme => ({
	bigAvatar: {
		margin: 15,
		width: 50,
		height: 50,
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
	};

	handleChange = panel => (event, expanded) => {
		console.log(event.target);
		this.setState({
			expanded: expanded ? panel : false,
		});
	};
	deleteTabs = id => {
		this.props.removeTab(id);
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
						<div onClick={() => this.deleteTabs(this.props.tab.id)}>
							<Fab
								aria-label="Delete"
								className={classes.fab}
								style={{ display: 'flex', alignItems: 'center' }}>
								<DeleteIcon />
							</Fab>
						</div>
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
