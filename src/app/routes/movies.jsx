import { useGetRunningMoviesQuery } from "../services/moviesApi"
import Movie from "../components/movie";

export default function Movies (){
    const { data, error, isLoading } = useGetRunningMoviesQuery();

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(error){
        return (
            <div>Sorry, unable to load movies!</div>
        )
    }

    return (
        <div className="movies-container">
            { data.map((movie) => (
                <Movie key={movie.movieId} details={movie}/>
            ))}
        </div>
    )
}