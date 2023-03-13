import { Link } from "react-router-dom"
import { useLoginMutation } from "../services/loginApi"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticationStatus } from "../reducers/selection";

export default function Login(){

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [login, {isSuccess, isError, error}] = useLoginMutation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginRequest = (e) => {
        e.preventDefault();
        const loginParams = new URLSearchParams()
        loginParams.set('username', username)
        loginParams.set('password', password)
        login(loginParams)
    }

    if(isSuccess){
        const setAuthenticationStatusAction = setAuthenticationStatus({authenticated: true});
        dispatch(setAuthenticationStatusAction)
        navigate("/movietime/movies")
    }

    if(isError){
        console.log(error)
        navigate("/movietime/login")
    }

    return (
        <form method="post" onSubmit={handleLoginRequest}>
            <p>Username</p>
            <p><input type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} /></p>
            <p>Passowrd</p>
            <p><input type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} /></p>
            <p><input type="submit" value="Login" /></p>
            <p>Not a user? <Link to="/movietime/register">Register</Link></p>
        </form>
    )
}