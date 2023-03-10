import { useSelector } from 'react-redux';
import { useState } from "react"

import SeatMap from '../components/seatMap';

export default function Booking(){

    const movieShow = useSelector((state) => state.selection.selectedMovieShow.movieShow);

    const [selectedShowDate, setSelectedShowDate] = useState('');

    return (
        <>
            <p>Select show date: <input type="date" onChange={(e) => setSelectedShowDate(e.target.value)}/></p>
            <SeatMap movieShowId={movieShow.movieShowId} date={selectedShowDate}/>
        </>
    )
}