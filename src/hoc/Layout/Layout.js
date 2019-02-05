import React from 'react';
import NavView from '../../containers/NavigationView';

const Layout = props => {
	return (
		<div>
			<NavView />
			{/* {props.children} */}
		</div>
	);
};

export default Layout;
