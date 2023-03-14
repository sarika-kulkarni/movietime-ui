import { useLogoutQuery } from "../services/loginApi"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticationStatus } from "../reducers/selection";

export default function Logout(){

    const dispatch = useDispatch();
    const { isError, isSuccess } = useLogoutQuery();

    if(isSuccess){
        const setAuthenticationStatusAction = setAuthenticationStatus({authenticated: false});
        dispatch(setAuthenticationStatusAction);
    }

    if(isError){
        return <div>Unable to logout. Please try again.</div>
    }

    return (
        <div>You are logged out. Click <Link to="/movietime/login">here</Link> to login again.</div>
    )
}