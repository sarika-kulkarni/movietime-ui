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

    const [registerUser] = useRegisterUserMutation();

    function processRegistration(e){
        e.preventDefault();

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
        
        <form className="registration-form" onSubmit={processRegistration} >
            <h2>Registration Form</h2>
            <label >
                <p>Email</p>
                <input className="form-input" type="email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                <p>First name</p>
                <input className="form-input" onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label>
                <p>Last name</p>
                <input className="form-input" onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label>
                <p>Phone</p>
                <input className="form-input" onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input className="form-input" type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                <p>Confirm password</p>
                <input className="form-input" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <input className="form-input-register" type="submit" name="Register" value="Register" />
        </form>
        </div>
      
    )
}