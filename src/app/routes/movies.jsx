import { useGetRunningMoviesQuery } from "../services/moviesApi"
import Movie from "../components/movie";
import { useNavigate } from "react-router-dom";
import '../../App.css'

export default function Movies (){
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetRunningMoviesQuery();

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