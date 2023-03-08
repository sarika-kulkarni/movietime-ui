import { useGetTheatersQuery } from "../services/theatersApi";
import Theater from "../components/theater";

export default function Theaters(){
    const { data, error, isLoading } = useGetTheatersQuery();

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