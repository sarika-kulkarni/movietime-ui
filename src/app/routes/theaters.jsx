import { useGetTheatersQuery } from "../services/theatersApi";
import Theater from "../components/theater";
import { useSelector } from 'react-redux';

export default function Theaters(){
    const userZip = useSelector((state) => state.selection.userZip);
    const { data, error, isLoading } = useGetTheatersQuery(userZip);

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(error){
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