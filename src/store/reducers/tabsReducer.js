import { ADD_TAB } from '../actions';
import { REMOVE_TAB } from '../actions';

const initialState = {
	tabs: [
		{
			createdOn: '',
			id: '0',
			url: 'abcs.com',
			title: 'Fist tab',
			img: '',
		},
		{
			id: '1',
			createdOn: '',
			url: 'idsdasf.com',
			title: 'second tab',
			img: '',
		},
		{
			id: '2',
			createdOn: '',
			url: 'sdffadna.com',
			title: 'third tab',
			img: '',
		},
		{
			id: '3',
			createdOn: '',
			url: 'fsfdsk.com',
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
		case REMOVE_TAB:
			return {
				...state,
				tabs: state.tabs.filter(tab => tab.id !== action.payload),
			};

		default:
			return state;
	}
};

export default tabsReducer;
