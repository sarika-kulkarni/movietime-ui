import { useGetMyProfileQuery, useUpdateProfileMutation } from "../services/profileApi"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function MyProfile(){

    const [updateProfile] = useUpdateProfileMutation();
    const navigate = useNavigate();

    const updateMyProfile = (e) => {
        e.preventDefault();
        const updatedProfile = {firstName, lastName, phone}
        updateProfile(updatedProfile)
        setUpdating(false)
    }

    const cancelUpdate = () => {
        setUpdating(false)
    }

    const {data, isLoading, isError, error} = useGetMyProfileQuery();

    const [updating, setUpdating] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(isError){

        if(error.status === 401){
            navigate('/movietime/login');
        }

        return (
            <div>Sorry, unable to load movies!</div>
        )
    }

    if(updating){
        return(
            <form onSubmit={updateMyProfile}>
                <div className="form-group">
                    <label>First name</label>
                    <input required type="text" value={firstName} className="form-control"
                    onChange={(e) => {e.preventDefault(); setFirstName(e.target.value);}}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input required type="text" value={lastName} className="form-control"
                    onChange={(e) => {e.preventDefault(); setLastName(e.target.value);}}/>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input required type="text" value={phone} className="form-control"
                    onChange={(e) => {e.preventDefault(); setPhone(e.target.value);}}/>
                </div>
                <p><button type="submit" className="btn btn-primary mb-2">Save</button> <button className="btn btn-secondary mb-2" name="cancel" onClick={cancelUpdate}>Cancel</button></p>
            </form>
        )
    }else{
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-2 font-weight-bold">First name:</div>
                    <div className="col-2">{data.firstName}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2 font-weight-bold">Last name:</div>
                    <div className="col-2">{data.lastName}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2 font-weight-bold">Phone:</div>
                    <div className="col-2">{data.phone}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <button className="btn btn-primary mb-2" onClick={() => {setUpdating(true)}}>Update my profile</button>
                    </div>
                </div>
            </div>
        )
    }
}