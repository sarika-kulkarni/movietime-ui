import { useGetAvailabilityQuery } from '../services/movieShowApi';

const rowIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export default function SeatMap(props){

    const movieShowId = props.movieShowId;
    const showDate = props.showDate || '2023-03-15';

    const { data, error, isLoading } = useGetAvailabilityQuery({movieShowId, showDate});

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(error){
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
            <td>
                <div className={`seat ${booked ? 'booked' : 'available'}`}>
                    <input type="checkbox" value={`${rowId}:${i}`} disabled={booked} onClick={selectSeat}/>
                </div>
            </td>
            );            
        }
        
        return columns;
    }

    const seatMapRows = (numberOfRows, numberOfSeatsPerRow) => {
        let rows = [];
        for (let i = 0; i < numberOfRows; i++) {
            rows.push(<tr>{seatMapColumns(rowIds[i], numberOfSeatsPerRow)}</tr>);            
        }

        return rows;
    }

    return (
        <>
            <table>
                <tbody>{seatMapRows(numberOfRows, numberOfSeatsPerRow)}</tbody>
            </table>
        </>
    )
}