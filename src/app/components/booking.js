import { useCancelBookingMutation } from "../services/myBookingsApi";

export default function Booking(props){
    const [cancelMyBooking] = useCancelBookingMutation();

    const booking = props.details;

    const getBookedSeats = (seats) => {
        return seats.map((seat) => `${seat.seatRow}${seat.seatNumber}`)
    }

    const cancelBooking = () =>{
        cancelMyBooking({bookingId: booking.bookingId});
    }

    return (
        <div>
            <p>Booking reference: {booking.bookingId}</p>
            <p>Booking date: {booking.bookingDate}</p>
            <p>Number of adult tickets: {booking.adultTickets}</p>
            <p>Number of child tickets: {booking.childTickets}</p>
            <p>Seats: {getBookedSeats(booking.seats).map((seatId) => (
                <span>{seatId}</span>
            ))}</p>
            <p><button onClick={cancelBooking}>Cancel booking</button></p>
        </div>
    )
}