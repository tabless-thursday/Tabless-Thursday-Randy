export const ADD_TAB = 'ADD_TAB';
export const REMOVE_TAB = 'REMOVE_TAB';
export const ADD_USER = 'ADD_USER';

export const addTab = tab => {
	return {
		type: ADD_TAB,
		payload: tab,
	};
};
export const removeTab = tabID => {
	return {
		type: REMOVE_TAB,
		payload: tabID,
	};
};

//  ==============USER===============

export const loginUser = stats => {
	localStorage.setItem('user', stats.username);
	return {
		type: 'USER_LOGIN',
		payload: stats,
	};
};

export const auth = () => {
	const currentUser = localStorage.getItem('user');
	return {
		type: 'USER_AUTH',
		payload: currentUser,
	};
};

export const userRegister = userStats => {
	return {
		type: 'USER_REGISTER',
		payload: userStats,
	};
};

export const addUser = user => {
	return {
		type: ADD_USER,
		payload: user,
	};
};
