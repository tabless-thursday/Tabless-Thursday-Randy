const initialState = {
	users: [
		{
			isAuth: true,
			id: 1,
			first_name: 'Ynez',
			last_name: 'Ranahan',
			email: 'yranahan0@xing.com',
			phone: '641-825-6150',
			password: 'qPFzearoL',
			username: 'yranahan0',
			tabs: [],
		},
		{
			isAuth: true,
			id: 2,
			first_name: 'Becky',
			last_name: 'Scanterbury',
			email: 'bscanterbury1@rakuten.co.jp',
			phone: '234-708-7877',
			password: 'yGVse2',
			username: 'bscanterbury1',
			tabs: [],
		},
		{
			isAuth: true,
			id: 3,
			first_name: 'Cordy',
			last_name: 'Earie',
			email: 'cearie2@weebly.com',
			phone: '928-135-5883',
			password: 'QUmBRWA',
			username: 'cearie2',
			tabs: [],
		},
		{
			isAuth: true,
			id: 4,
			first_name: 'Bink',
			last_name: 'Aston',
			email: 'baston3@chron.com',
			phone: '247-656-2782',
			password: 'NZb8ALAaac9',
			username: 'baston3',
			tabs: [],
		},
		{
			isAuth: true,
			id: 5,
			first_name: 'Frederick',
			last_name: "O' Faherty",
			email: 'fofaherty4@biglobe.ne.jp',
			phone: '907-573-2103',
			password: 'K0hGEv',
			username: 'fofaherty4',
			tabs: [],
		},
		{
			isAuth: true,
			id: 6,
			first_name: 'Kellie',
			last_name: 'Mummery',
			email: 'kmummery5@wikispaces.com',
			phone: '719-460-5986',
			password: 'ZmNBqjG',
			username: 'kmummery5',
			tabs: [],
		},
		{
			isAuth: true,
			id: 7,
			first_name: 'Vachel',
			last_name: 'MacTeague',
			email: 'vmacteague6@symantec.com',
			phone: '249-247-0510',
			password: 'XsLjdEcof',
			username: 'vmacteague6',
			tabs: [],
		},
		{
			isAuth: true,
			id: 8,
			first_name: 'Minda',
			last_name: 'Baden',
			email: 'mbaden7@booking.com',
			phone: '431-986-8965',
			password: 'iD2QzWn97lAG',
			username: 'mbaden7',
			tabs: [],
		},
		{
			isAuth: true,
			id: 9,
			first_name: 'Maximilianus',
			last_name: 'Gercken',
			email: 'mgercken8@hatena.ne.jp',
			phone: '330-540-9951',
			password: '7AFA6F',
			username: 'mgercken8',
			tabs: [],
		},
		{
			isAuth: true,
			id: 10,
			first_name: 'Martynne',
			last_name: 'Tuminelli',
			email: 'mtuminelli9@bbc.co.uk',
			phone: '423-939-1852',
			password: '3iRQ0p',
			username: 'mtuminelli9',
			tabs: [],
		},
	],
	currentUser: null,
	isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return { ...state, currentUser: action.payload, isLoggedIn: true };
		case 'USER_AUTH':
			console.log('reducer', action.payload);
			return { ...state, currentUser: action.payload };
		case 'USER_REGISTER':
			return {
				...state,
				users: [...state.users, action.payload],
			};

		default:
			return state;
	}
};

export default userReducer;
