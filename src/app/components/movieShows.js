import { useGetTheatersRunningMovieQuery } from "../services/moviesApi"
import { useNavigate } from "react-router-dom";
import MovieShow from "./movieShow";

export default function MovieShows(props){

    const navigate = useNavigate();
    const { data, error, isLoading } = useGetTheatersRunningMovieQuery(props.movieId);

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
            <div>Sorry, unable to load movie shows!</div>
        )
    }

    return(
        <>
            { data.map((showDetails) => (
            <div key={showDetails.theater.theaterId} className="container m-3">
                <div className="row justify-content-center">
                    <div className="col-4">{showDetails.theater.theaterName}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">Zip: {showDetails.theater.zip}</div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-4">
                        { showDetails.movieShows.map((show) => (
                            <MovieShow key={show.movieShowId} show={show} theater={showDetails.theater}/>                                   
                        ))}
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}