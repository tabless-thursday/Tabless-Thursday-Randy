import React from 'react';
import Navigation from '../components/Navigation';

const Layout = props => {
	return (
		<div>
			<Navigation />
			<div>{props.children}</div>
		</div>
	);
};

export default Layout;
