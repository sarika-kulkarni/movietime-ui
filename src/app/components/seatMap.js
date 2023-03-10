import { useGetAvailabilityQuery } from '../services/movieShowApi';

export default function SeatMap(props){

    const showDate = props.date || '2023-03-15';
    const movieShowId = props.movieShowId;

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

    return (
        <>
            <div>
                Number of rows: {data.numberOfRows} 
            </div>
            <div>
                Number of seats per row: {data.numberOfSeatsPerRow} 
            </div>
        </>
    )
}