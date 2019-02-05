export const ADD_TAB = 'ADD_TAB';

export const addTab = tab => {
	return {
		type: ADD_TAB,
		payload: tab,
	};
};
