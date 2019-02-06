import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
	};

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
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
						<Avatar alt="" src="" className={classes.bigAvatar} />
						{this.props.tab.title}
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography />
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	}
}

Tab.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tab);

// to get the favicon document.querySelector('link').href
