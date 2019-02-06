import React, { Component } from 'react';
import { connect } from 'react-redux';

import TabsList from '../components/Tabs/TabsList';

class HomeContainer extends Component {
	renderItems = tabs => {
		return tabs ? tabs.map((item, i) => <TabsList {...item} key={i} />) : null;
	};
	render() {
		return <div>{this.renderItems(this.props.tabs)}</div>;
	}
}

const mapStateToProps = state => {
	return {
		tabs: state.tabsReducer.tabs,
	};
};

export default connect(mapStateToProps)(HomeContainer);
