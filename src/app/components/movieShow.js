import '../../App.css';
import { useDispatch } from 'react-redux';
import { selectMovieShow } from "../reducers/selection";
import { useNavigate } from 'react-router-dom';

export default function MovieShow(props){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSelectMovieShow = () => {
        const selectMovieShowAction = selectMovieShow({movieShow: props.show, theater: props.theater});
        dispatch(selectMovieShowAction);
        navigate('/movietime/booking');
    }

    return (
        <span className="show-time" onClick={onSelectMovieShow}>{props.show.showTime}</span>  
    )
}