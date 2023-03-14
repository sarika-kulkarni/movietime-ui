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
            <div className="form-group">
                <label>Username</label>
                <input className="form-control" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Login</button>
            <p className="register-link">Not a user? <Link to="/movietime/register">Register</Link></p>
        </form>
    )
}