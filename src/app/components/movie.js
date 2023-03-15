import '../../App.css';
import { useDispatch } from 'react-redux';
import { selectMovie } from "../reducers/selection";
import { useNavigate } from 'react-router-dom';

export default function Movie(props){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const moviePosterUrl = `img/movie_${props.details.movieId}.jpg`
    const moviePosterStyle = {
        backgroundImage: `url(${moviePosterUrl})`
    } 

    const onSelectMovie = () => {
        const selectMovieAction = selectMovie({movie: props.details});
        dispatch(selectMovieAction);
        navigate('/movietime/movieDetails');
    }

    return (
        <div className="movie" onClick={onSelectMovie}>
            <div className="movie-poster" style={moviePosterStyle}></div>
            <p>{props.details.title}</p>
        </div>
    )
}