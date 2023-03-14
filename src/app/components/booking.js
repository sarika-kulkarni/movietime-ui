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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">Booking reference:</div>
                <div className="col-4">{booking.bookingId}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">Booking date:</div>
                <div className="col-4">{booking.bookingDate}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">Number of adult tickets:</div>
                <div className="col-4"> {booking.adultTickets}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">Number of child tickets:</div>
                <div className="col-4"> {booking.childTickets}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">Seats:</div>
                <div className="col-4">
                    {getBookedSeats(booking.seats).map((seatId) => (
                    <span className="booked-seats">{seatId}</span>
                    ))}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">
                    <button className="btn btn-primary mb-2" onClick={cancelBooking}>Cancel booking</button>
                </div>
            </div>
        </div>
    )
}