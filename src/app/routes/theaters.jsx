import { useGetTheatersQuery } from "../services/theatersApi";
import Theater from "../components/theater";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Theaters(){
    const navigate = useNavigate();
    const userZip = useSelector((state) => state.selection.userZip);
    const { data, error, isLoading } = useGetTheatersQuery(userZip);

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(error){
        if(error.status === 401){
            navigate('/movietime/login');
        }

        return (
            <div>Sorry, unable to load theaters!</div>
        )
    }

    return (
        <div className="movies-container">
            { data.map((theater) => (
                <Theater key={theater.theaterId} details={theater}/>
            ))}
        </div>
    )
}