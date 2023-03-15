export default function Theater(props){

    return (
        <div className="container m-4">
            <div className="row justify-content-center">
                <div className="col-2 font-weight-bold">Theater name:</div>
                <div className="col-4">{props.details.theaterName}</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-2 font-weight-bold">Zip:</div>
                <div className="col-4">{props.details.zip}</div>
            </div>
        </div>
    )
}