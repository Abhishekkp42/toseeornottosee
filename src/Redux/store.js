import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { loginReducer } from "./Login/reducer"
import { restaurantsReducer } from "./Restaurant/reducer"


export const rootReducer = combineReducers({
	login: loginReducer,
	restaurants: restaurantsReducer
})

export const store= createStore(rootReducer, applyMiddleware(thunk))