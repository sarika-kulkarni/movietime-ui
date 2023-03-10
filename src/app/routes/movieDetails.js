import { useSelector } from 'react-redux';
import MovieShows from '../components/movieShows';

export default function MovieDetails() {

    const movieDetails = useSelector((state) => state.selection.selectedMovie);

    return (
        <>
            <div className="movie-details">
                <p><span>Director:</span><span>{movieDetails.director}</span></p>
                <p><span>Genre:</span><span>{movieDetails.genre}</span></p>
                <p><span>Duration:</span><span>{movieDetails.duration} minutes</span></p>
            </div>
            <MovieShows movieId={movieDetails.movieId} />
        </>
    )
}