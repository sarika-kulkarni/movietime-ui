import { useGetTheatersRunningMovieQuery } from "../services/moviesApi"
import MovieShow from "./movieShow";

export default function MovieShows(props){

    const { data, error, isLoading } = useGetTheatersRunningMovieQuery(props.movieId);

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(error){
        return (
            <div>Sorry, unable to load movie shows!</div>
        )
    }

    return(
        <>
            { data.map((showDetails) => (
            <div className="movie-shows">
                <p>{showDetails.theater.theaterName}</p>
                <div className="shows">
                { showDetails.movieShows.map((show) => (
                    <MovieShow key={show.movieShowId} show={show} theater={showDetails.theater}/>                                   
                ))}
                </div>
            </div>
            ))}
        </>
    )
}