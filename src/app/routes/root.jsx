import { Outlet } from "react-router-dom";

export default function Root(){
    return (
        <>
            <header>
                <span>MovieTime</span>
                <span>Login</span>
            </header>
            <nav>
                <ul>
                    <li>Movies</li>
                    <li>Theaters</li>
                    <li>Zip <input name="zip"/></li>
                </ul>
            </nav>
            <div name="content">
                <Outlet />
            </div>
            <footer>&copy;MovieTime.com 2023</footer>
        </>
    );
}