import { useGetMyBookingsQuery } from "../services/myBookingsApi"
import { useNavigate } from "react-router-dom"
import Booking from "../components/booking";

export default function MyBookings (){
    const navigate = useNavigate();

    const { data, error, isLoading } = useGetMyBookingsQuery();

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
            <div>Sorry, unable to load your bookings!</div>
        )
    }

    return (
        <div className="bookings-container">
            { data.map((booking) => (
                <Booking key={booking.bookingId} details={booking}/>
            ))}
        </div>
    )
}