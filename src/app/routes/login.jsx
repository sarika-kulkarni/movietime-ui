import { Link } from "react-router-dom"

export default function Login(){
    return (
        <form method="post" action="/movietime/perform_login">
            <p>Username</p>
            <p><input type="text" name="username"/></p>
            <p>Passowrd</p>
            <p><input type="password" name="password" /></p>
            <p><input type="submit" value="Login" /></p>
            <p>Not a user? <Link to="/movietime/register">Register</Link></p>
        </form>
    )
}