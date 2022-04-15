import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./action"


const initState={
	loading: false,
	isAuthenticated: false,
	token: "",
	error:false
}

export const loginReducer= (store=initState, {payload, type}) => {
	switch (type){
		case LOGIN_LOADING:
			return {
				...store,
				loading:true
			};
		case LOGIN_FAILURE:
			return{
				...store,
				error:true
			};
		case LOGIN_SUCCESS:
			return {
				...store,
				loading:false,
				isAuthenticated:true,
				token: payload,
				error:false
			}	
		default:
			return store	
	}
}