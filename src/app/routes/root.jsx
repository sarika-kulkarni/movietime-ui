import { Outlet, Link } from "react-router-dom";
import { setUserZip } from "../reducers/selection";
import { useSelector, useDispatch } from 'react-redux';

export default function Root(){

    const userZip = useSelector((state) => state.selection.userZip) || '';
    const authenticated = useSelector((state) => state.selection.authenticated);
    const dispatch = useDispatch();

    const updateUserZip = (e) => {
        const setUserZipAction = setUserZip({ zip: e.target.value});
        dispatch(setUserZipAction);
    }

    return (
        <>
            <header>
                <span className="app-logo align-top">MovieTime</span>
                { authenticated ? <span className="header-links"><Link to="/movietime/logout">Logout</Link></span> :
                <span className="header-links align-top"><Link to="/movietime/login">Login</Link></span>}
            </header>
            <nav>
                <ul>
                    <li><Link to="/movietime/movies">Movies</Link></li>
                    <li><Link to="/movietime/theaters">Theaters</Link></li>
                    <li><Link to="/movietime/mybookings">My bookings</Link></li>
                    <li><Link to="/movietime/myprofile">My profile</Link></li>
                    <li className="nav-zip">Zip: <input type="text" size="9" name="zip" value={userZip} onChange={updateUserZip}/></li>
                </ul>
            </nav>
            <div name="content" className="content container">
                <Outlet />
            </div>
            <footer className="fixed-bottom">&copy;MovieTime.com 2023</footer>
        </>
    );
}