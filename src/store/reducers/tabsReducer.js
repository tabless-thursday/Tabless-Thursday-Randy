import { ADD_TAB, ADD_USER } from '../actions';

const initialState = {
	tabs: [
		{
			createdOn: '',
			url: '',
			title: 'Fist tab',
			img: '',
		},
	],
	users: [
		{
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
			phone: '1-770-736-8031 x56442',
			savedTabs: [
				{
					title: 'twitch',
					thumbNail: '',
					url: 'google.com',
				},
				{
					title: 'twitch',
					thumbNail: '',
					url: 'google.com',
				},
				{
					title: 'twitch',
					thumbNail: '',
					url: 'google.com',
				},
				{
					title: 'twitch',
					thumbNail: '',
					url: 'google.com',
				},
				{
					title: 'twitch',
					thumbNail: '',
					url: 'google.com',
				},
				{
					title: 'twitch',
					thumbNail: '',
					url: 'google.com',
				},
			],
		},
		{
			name: 'Ervin Howell',
			username: 'Antonette',
			email: 'Shanna@melissa.tv',
			phone: '010-692-6593 x09125',
			savedTabs: [
				{
					title: 'Howell',
					thumbNail: '',
					url: 'yahoo.com',
				},
				{
					title: 'Howell',
					thumbNail: '',
					url: 'yahoo.com',
				},
				{
					title: 'Howell',
					thumbNail: '',
					url: 'yahoo.com',
				},
			],
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
		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
			};

		default:
			return state;
	}
};

export default tabsReducer;
