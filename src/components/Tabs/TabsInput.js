import React, { Component } from 'react';
import { addTab } from '../../store/actions';
import { connect } from 'react-redux';

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
		return (
			<div>
				<input
					type="text"
					name="tabURL"
					value={this.state.tabURL}
					onChange={this.handleInputChange}
					placeholder="copy and paste url"
					required
				/>
				<button onClick={this.addNewTab}>Add tab</button>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		tabs: state.tabs,
	};
};

export default connect(
	mapStateToProps,
	{ addTab },
)(TabsInput);
