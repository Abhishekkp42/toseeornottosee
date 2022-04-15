import axios from "axios"
import { getRestaurants, getRestaurantsFailure, getRestaurantsLoading } from "../Restaurant/action"

export const LOGIN_LOADING = "LOGIN_LOADING"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const loginLoading = () => ({
	type: LOGIN_LOADING
})

export const loginFailure = () => ({
	type: LOGIN_FAILURE
})

export const loginSuccess = () => ({
	type: LOGIN_SUCCESS,
	payload
})


export const getRestaurantData = () => (dispatch) => {
	dispatch(getRestaurantsLoading())
	axios.get("http://localhost:5000/restaurants").then((res) => {
		dispatch(getRestaurants(res))
	})
	.catch(() => {
		dispatch(getRestaurantsFailure())
	})
}