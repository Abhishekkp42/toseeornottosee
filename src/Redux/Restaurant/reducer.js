import { GET_RESTAURANTS_FAILURE, GET_RESTAURANTS_LOADING, GET_RESTAURANTS } from "./action"


const initState={
	loading: false,
	error:false,
	restaurants:[]
}

export const restaurantsReducer= (store=initState, {payload, type}) => {
	switch (type){
		case GET_RESTAURANTS_LOADING:
			return {
				...store,
				loading:true
			};
		case GET_RESTAURANTS_FAILURE:
			return{
				...store,
				loading:false,
				error:true
			};
		case GET_RESTAURANTS:
			return {
				...store,
				loading:false,
				restaurants: [...payload],
				error:false
			}	
		default:
			return store	
	}
}