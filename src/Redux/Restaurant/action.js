export const GET_RESTAURANTS_LOADING = "GET_RESTAURANTS_LOADING"
export const GET_RESTAURANTS = "GET_RESTAURANTS"
export const GET_RESTAURANTS_FAILURE = "GET_RESTAURANTS_FAILURE"

export const getRestaurantsLoading = () => ({
	type: GET_RESTAURANTS_LOADING
})

export const getRestaurantsFailure = () => ({
	type: GET_RESTAURANTS_FAILURE
})

export const getRestaurants = () => ({
	type: GET_RESTAURANTS,
	payload
})