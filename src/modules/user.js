import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { userApi } from '../shared/api';
import { setCookie } from '../shared/cookie';

// action
const SIGNUP = 'user/SIGNUP';
const LOGIN = 'user/LOGIN';
const SET_LOGIN = 'user/SET_LOGIN';

// initState
const initState = {
	user: {
		userId: '',
		userName: '',
		password: '',
		userImage: '',
	},
	isLogin: false,
};

// action creator
const signup = createAction(SIGNUP, (userInfo) => ({ userInfo }));
const login = createAction(LOGIN, (userInfo) => ({ userInfo }));
const setLogin = createAction(SET_LOGIN, (userInfo) => ({ userInfo }));

// Thunk function
const __signup =
	(userInfo) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = userApi.signup(userInfo);
			dispatch(signup(data));
		} catch (e) {
			console.log(e);
		}
	};

const __login =
	(userInfo) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await userApi.login(userInfo);
			dispatch(login(data));
			localStorage.setItem('userId', data.email);
			setCookie('token', data.email, 1);
			history.replace('/');
		} catch (e) {
			console.log(e);
		}
	};

const __setLogin =
	() =>
	(dispatch, getState, { history }) => {
		const userId = localStorage.getItem('userId');
		const token = document.cookie;

		if (userId !== null && token !== '') {
			dispatch(setLogin());
		}
	};

// reducer
const user = handleActions(
	{
		[LOGIN]: (state, action) => {
			console.log(action);
			return {
				...state,
				isLogin: true,
				user: {
					...state.user,
					userId: action.payload.userInfo.email,
					// userName: action.payload.userInfo.userName,
					// userImage: action.payload.userInfo.userImage,
				},
			};
		},
		[SET_LOGIN]: (state, action) => {
			return {
				...state,
				isLogin: true,
			};
		},
	},

	initState,
);

export const userAcions = {
	__signup,
	__login,
	__setLogin,
};
export default user;
