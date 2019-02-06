import { ADD_TAB } from '../actions';

const initialState = {
	tabs: [
		{
			createdOn: '',
			url: '',
			title: 'Fist tab',
			img: '',
		},
		{
			createdOn: '',
			url: '',
			title: 'second tab',
			img: '',
		},
		{
			createdOn: '',
			url: '',
			title: 'third tab',
			img: '',
		},
		{
			createdOn: '',
			url: '',
			title: 'Fourth tab',
			img: '',
		},
	],
};

const tabsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TAB:
			return {
				...state,
				tabs: [...state.tabs, action.payload],
			};

		default:
			return state;
	}
};

export default tabsReducer;
