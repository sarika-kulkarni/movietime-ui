import { Outlet, Link } from "react-router-dom";
import { setUserZip } from "../reducers/selection";
import { useSelector, useDispatch } from 'react-redux';

export default function Root(){

    const userZip = useSelector((state) => state.selection.userZip) || '';
    const dispatch = useDispatch();

    const updateUserZip = (e) => {
        const setUserZipAction = setUserZip({ zip: e.target.value});
        dispatch(setUserZipAction);
    }

    return (
        <>
            <header>
                <span>MovieTime</span>
                <span>Login</span>
            </header>
            <nav>
                <ul>
                    <li><Link to="/movietime/movies">Movies</Link></li>
                    <li><Link to="/movietime/theaters">Theaters</Link></li>
                    <li>Zip <input type="text" name="zip" value={userZip} onChange={updateUserZip}/></li>
                </ul>
            </nav>
            <div name="content">
                <Outlet />
            </div>
            <footer>&copy;MovieTime.com 2023</footer>
        </>
    );
}