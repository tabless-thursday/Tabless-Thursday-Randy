import React from 'react';
import Navigation from '../components/Navigation';

const Layout = props => {
	return (
		<div>
			<div className="pusher">{props.children}</div>
		</div>
	);
};

export default Layout;
