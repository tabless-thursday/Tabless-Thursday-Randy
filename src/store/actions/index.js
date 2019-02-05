export const ADD_TAB = 'ADD_TAB';
export const ADD_USER = 'ADD_USER';

export const addTab = tab => {
	return {
		type: ADD_TAB,
		payload: tab,
	};
};

export const addUser = user => {
	return {
		type: ADD_USER,
		payload: user,
	};
};
