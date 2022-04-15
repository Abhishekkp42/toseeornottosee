import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {loginLoading, loginFailure,loginSuccess} from "../Redux/Login/action"

export const Login = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch();

const handleSubmit = () => {
	const userDetails = {
		username,
		password
	}

}

	return <div>
		<h1>Login</h1>
		<input type="text" placeholder="Enter username" value={username} onChange= {(e) => setUsername(e.target.value) }/>
		<input type="text" placeholder="Enter password" value={password} onChange= {(e) => setPassword(e.target.value) } />
		<button onClick={handleSubmit}>Login</button>

	</div>
}