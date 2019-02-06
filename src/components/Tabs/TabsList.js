import React from 'react';
import { connect } from 'react-redux';

import { addTab } from '../../store/actions';
import Tab from './Tab';

const TabsList = props => {
	return (
		<div>
			<Tab tab={props} />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		tabs: state.tabsReducer.tabs,
	};
};

export default connect(
	mapStateToProps,
	{ addTab },
)(TabsList);
