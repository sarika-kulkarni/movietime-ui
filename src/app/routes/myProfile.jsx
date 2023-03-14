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
                <p>First name: <input type="text" value={firstName} onChange={(e) => {e.preventDefault(); setFirstName(e.target.value);}}/></p>
                <p>Last name: <input type="text" value={lastName} onChange={(e) => {e.preventDefault(); setLastName(e.target.value)}}/></p>
                <p>Phone: <input type="text" value={phone} onChange={(e) => {e.preventDefault(); setPhone(e.target.value)}}/></p>
                <p><input type="submit" value="Save" /> <button name="cancel" onClick={cancelUpdate}>Cancel</button></p>
            </form>
        )
    }else{
        return(
            <div>
                <p>First name: {data.firstName}</p>
                <p>Last name: {data.lastName}</p>
                <p>Phone: {data.phone}</p>
                <p><button onClick={() => {setUpdating(true)}}>Update my profile</button></p>
            </div>
        )
    }
}