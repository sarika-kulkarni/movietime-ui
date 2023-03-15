import { useGetAvailabilityQuery } from '../services/movieShowApi';
import { useNavigate } from "react-router-dom";

const rowIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export default function SeatMap(props){

    const navigate = useNavigate();
    const movieShowId = props.movieShowId;
    const showDate = props.showDate || '2023-03-15';

    const { data, error, isLoading } = useGetAvailabilityQuery({movieShowId, showDate});

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
            <div>Sorry, unable to load show availability!</div>
        )
    }

    const { numberOfRows, numberOfSeatsPerRow, bookedSeats } = data;

    const isSeatBooked = (rowId, seatId, bookedSeats) => {
        let booked = false;
        bookedSeats.forEach(seat => {
            if(seat.seatRow === rowId && seat.seatNumber === seatId){
                booked = true;
            }
        });

        return booked;
    }

    const selectSeat = (e) => {
        if(!e.target.disabled){
            props.onSeatSelect(e.target.value, e.target.checked);
        }
    }

    const seatMapColumns = (rowId, numberOfSeatsPerRow) => {
        let columns = []
        for (let i = 1; i <= numberOfSeatsPerRow; i++) {
            let booked = isSeatBooked(rowId, i, bookedSeats);
            columns.push(
            <td key={`${rowId}${i}`}>
                <div className={`seat ${booked ? 'booked' : 'available'}`}>
                    <p><input type="checkbox" value={`${rowId}:${i}`} disabled={booked} onClick={selectSeat}/></p>
                    <p>{`${rowId}${i}`}</p>
                </div>
            </td>
            );            
        }
        
        return columns;
    }

    const seatMapRows = (numberOfRows, numberOfSeatsPerRow) => {
        let rows = [];
        for (let i = 0; i < numberOfRows; i++) {
            rows.push(<tr key={rowIds[i]}>{seatMapColumns(rowIds[i], numberOfSeatsPerRow)}</tr>);            
        }

        return rows;
    }

    return (
        <>
            <table className="seat-map">
                <tbody>{seatMapRows(numberOfRows, numberOfSeatsPerRow)}</tbody>
            </table>
        </>
    )
}