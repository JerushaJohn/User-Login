import React, { useState } from "react"
import { Link } from "react-router-dom"
import Register from "./Register"

function Login(props) {
    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''
    })
    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')

    const login = (event) => {

        event.preventDefault()
   

        const isEmailValid = validateEmail(userDetails.email)
        const isPasswordValid = validatePassword(userDetails.password)

        

        if (isEmailValid && isPasswordValid) {
            // Programatically navigate
            console.log('props', props);
            props.history.push('/home')
        } else 
        {
            console.error('not valid');
        }
    }
    

    
    const mailexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;
    const validateEmail = (email) => {
        if (mailexp.test(email)) {
            setisEmailValid(true)
            setemailError('')
            return true
        } else {
            setisEmailValid(false)
            setemailError('Please enter valid email')
            return false
        }
    }

    const passwordExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    const validatePassword = (password) => {
        if (passwordExp.test(password)) {
            setisPasswordValid(true)
            setpasswordError('')
            return true
        } else {
            setisPasswordValid(false)
            setpasswordError('minimum of 1 lower case letter ,1 upper case letter ,1 numeric character')
            return false
        }
    }
    
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] =
            event.target.value
        setuserDetails(userDetailsCopy)
    }

    return (
       <div className="row login-form-container">
       <div className="col-6 login-form-container-1">
       <img src="https://media.istockphoto.com/photos/woman-using-access-window-to-log-in-entering-password-on-laptop-sign-picture-id1322595946?b=1&k=20&m=1322595946&s=170667a&w=0&h=37m0-fLJUHJkI8V2mFJYslTVwP7vKogqeuWdp0d6rXk="></img>
       </div>   

       <div className="col-5 login-form-container-2">
       <div className="login-form-style">
       <h1>WELCOME BACK</h1>
            <form onSubmit={login} >
                <div>
                    <input type="email" name="email" placeholder="example@gmail.com" onChange={(event) => { handleChange(event)}} value={userDetails.email} /> <br></br>
                    {!isEmailValid ? <span style={{color:'red', fontSize:'12px'}}>{emailError}</span> : null}
                </div>
               
                <div>
                    <input type="password" name="password" placeholder="Enter password" onChange={(event) => { handleChange(event) }} value={userDetails.password} /> <br></br>
                     {!isPasswordValid ? <span style={{color:'red', fontSize:'12px' }}>{passwordError}</span> : null}
                </div>
               
                <div>
        <input type="submit" value="Login" /> <br/>
                </div>
            </form>
            <br></br>
           <Link to="/register"><input type="submit" value="Create Account" /></Link> 
        </div>

       </div>
       </div>
    )
}

export default Login
