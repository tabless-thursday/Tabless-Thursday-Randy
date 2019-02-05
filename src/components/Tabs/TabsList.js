import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTab } from '../../store/actions';
import Tab from './Tab';

const TabsList = props => {
	return (
		<div>
			{props.tabs.map((tab, i) => {
				return <Tab addTab={props.addTab} key={i} tab={tab} />;
			})}
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
