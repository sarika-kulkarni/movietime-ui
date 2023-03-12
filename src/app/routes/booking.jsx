import { useSelector } from 'react-redux';
import { useState } from "react";
import { useBookShowMutation } from '../services/movieShowApi';
import '../../App.css'

import SeatMap from '../components/seatMap';

export default function Booking(){

    const movieShow = useSelector((state) => state.selection.selectedMovieShow.movieShow);
    const [selectedShowDate, setSelectedShowDate] = useState('');
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [requestedSeats, setRequestedSeats] = useState([]);
    const [bookShow, {data, isSuccess, isError}] = useBookShowMutation();

    const updateRequestedSeats = (seatId, selected) => {
        let updatedSeatSelection = [...requestedSeats];

        if(selected){
            updatedSeatSelection.push(seatId);
            setRequestedSeats(updatedSeatSelection);
        }else{
            setRequestedSeats(updatedSeatSelection.filter((seat) => seat !== seatId))
        }
    }

    const onSelectShowDate = (e) => {
        setSelectedShowDate(e.target.value)
        setRequestedSeats([]);
    }

    const onBookShow = (e) => {
        e.preventDefault();

        const selectedSeats = requestedSeats.map((id) => {
            let splitId = id.split(':');
            return {seatRow: splitId[0], seatNumber: splitId[1]}
        })

        let bookingRequest = {
            movieShowDate: selectedShowDate,
            numberOfAdultTickets: adultTickets,
            numberOfChildTickets: childTickets,
            requestedSeats: selectedSeats
        }

        console.log(bookingRequest);

        bookShow({movieShowId: movieShow.movieShowId, bookingRequest});

        e.target.reset();
    }

    return (
        <form onSubmit={onBookShow}>
            <p className={isSuccess ? 'success-message' : 'failure-message'}>
                {isSuccess && `Your booking is confirmed. Booking reference number: ${data.bookingId}`}
                {isError && 'Sorry, unable to book your show now'}
            </p>
            <p>Select show date: <input type="date" onChange={onSelectShowDate}/></p>
            <p>Number of adult tickets: <input type="number" onChange={(e) => setAdultTickets(e.target.value)} /></p>
            <p>Number of child tickets: <input type="number" onChange={(e) => setChildTickets(e.target.value)} /></p>
            <p>Select seats:</p>
            <SeatMap showDate={selectedShowDate} movieShowId={movieShow.movieShowId} onSeatSelect={updateRequestedSeats}/>
            <p><input type="submit" value="Book show" /></p>
        </form>
    )
}