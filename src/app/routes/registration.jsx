import { useState } from "react"
import { useRegisterUserMutation } from "../services/registrationApi";
import '../../App.css' 

export default function Registration(){
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState('')

    const [registerUser, {isSuccess}] = useRegisterUserMutation();

    function processRegistration(e){
        e.preventDefault();

        if(password !== confirmPassword){
            setValidationError("Passwords do not match.")
            return;
        }else{
            setValidationError("")
        }

        const registrationRequest = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            password: password,
            confirmPassword: confirmPassword
        }

        registerUser(JSON.stringify(registrationRequest));

        e.target.reset();
    }

    return (
       <div>
        <form onSubmit={processRegistration} >
            <h2>Registration Form</h2>
            <div className="form-group">
                { validationError && <p class="validation-error font-weight-bold">{validationError}</p>}
                { isSuccess && <p class="success-message font-weight-bold">Registration is successful</p>}
            </div>
            <div className="form-group" >
                <label>Email</label>
                <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-input" type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>First name</label>
                <input required className="form-input" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Last name</label>
                <input required className="form-input" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input required className="form-input" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input required className="form-input" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Confirm password</label>
                <input required className="form-input" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Register</button>
        </form>
        </div>
    )
}