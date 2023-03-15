import { useSelector } from 'react-redux';
import MovieShows from '../components/movieShows';

export default function MovieDetails() {

    const movieDetails = useSelector((state) => state.selection.selectedMovie);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-2 font-weight-bold">Director:</div>
                    <div className="col-2">{movieDetails.director}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2 font-weight-bold">Genre:</div>
                    <div className="col-2">{movieDetails.genre}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2 font-weight-bold">Duration:</div>
                    <div className="col-2">{movieDetails.duration}</div>
                </div>
            </div>
            <MovieShows key={movieDetails.movieId} movieId={movieDetails.movieId} />
        </>
    )
}