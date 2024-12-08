import { Box, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
// import axios from 'axios';
import React, { useState } from 'react';
import { FaBrain, FaEnvelope, FaGoogle, FaPhone, FaRegKeyboard, FaUser } from 'react-icons/fa';
import { MdHeight, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FcGoogle } from "react-icons/fc";

import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { p } from 'framer-motion/client';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';

// import { setUser } from '../store/UserSlice/UserSlice';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    cpassword:""
});

    const [error,setError]=useState({errortype:"",errormsg:""})
    const navigate = useNavigate();
    const URL='http://localhost:6006/user/signup'

 
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        
    validateFirstname(formData.firstname || "");
    validateLastname(formData.lastname || "");
    validateEmail(formData.email || "");
    validatePassword(formData.password || "");

    // Check if there are any errors
    if (error.errortype) {
        Swal.fire("Error", "Please correct the errors before submitting.", "error");
        return;
    }
        try {
            const res=await axios.post('http://localhost:6006/user/signup',formData)
            console.log(res);
            
            if(res.data.success){
              Swal.fire({
                title: 'Registered Successfully!',
                text: 'You have been registered. Redirecting to sign-in...',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/login');  // Navigate to sign-in after the alert is closed
            });
           
            }
            
            
        } catch (err) {
            // dispatch(signInFailure(err));
        }
        
      
      
    };

    const loginWithGoogle = () => {
        window.open('http://localhost:6006/auth/google/callback', '_self');
    };
    const handleChange=(e)=>{
         const {name,value}=e.target
         setFormData((prev)=>({
            ...prev,[name]:value
         }))
         if (name === "firstname") {
          validateFirstname(value);
      }else if (name === "lastname") {
        validateLastname(value);
    } else if (name === "email") {
        validateEmail(value);
    } else if (name === "password") {
        validatePassword(value);
    }
     else if (name === "phoneno") {
        validatePhoneNumber(value);
    }
    else if(name==="cpassword"){
          checkPassword(value,formData.password)
    }
    else if(name==="username"){
        validateUsername(value)
    }
    else if(name==="age"){
        validateAge(value)
    }
    else if(name==="designation"){
        validateDesignation(value)
    }
        
    }
   
  function validateFirstname(value) {
    if (!value.trim()) {
        setError({ errortype: "firstname", errormsg: "First name is required." });
    } else if (!/^[A-Z]/.test(value)) {
        setError({ errortype: "firstname", errormsg: "First name should start with a capital letter." });
    } else {
        clearError("firstname");
    }
}
 

function validateLastname(value) {
    if (!value.trim()) {
        setError({ errortype: "lastname", errormsg: "Last name is required." });
    }else if (!/^[A-Z]/.test(value)) {
      setError({ errortype: "lastname", errormsg: "last name should start with a capital letter." });
  } else {
        clearError("lastname");
    }
}

function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
        setError({ errortype: "email", errormsg: "Email is required." });
    } else if (!emailRegex.test(value)) {
        setError({ errortype: "email", errormsg: "Invalid email format." });
    } else {
        clearError("email");
    }
}
function validatePhoneNumber(value) {
    const phoneRegex =/^(\+91[\-\s]?)?[6-9]\d{9}$/

    ;
    if (!value.trim()) {
        setError({ errortype: "phoneno", errormsg: "Phone number is required." });
    } else if (!phoneRegex.test(value)) {
        setError({ errortype: "phoneno", errormsg: "Invalid phone number format." });
    } else {
        clearError("phoneno");
    }
}
function validateUsername(value){
    if (!value.trim()) {
        setError({ errortype: "username", errormsg: "Username is required." });
    } 
    else if(value.length <5){
        setError({errortype:"username",errormsg:"Username must be at least 5 characters long"})
    }
    else{
        clearError("username")
    }
}
function validateDesignation(value){
    if (!value.trim()) {
        setError({ errortype: "designation", errormsg: "designation is required." });
    } 
  
    else{
        clearError("designation")
    }
}
function validateAge(value) {
    value = Number.parseInt(value);
    
    if (!value && value !== 0) {
        setError({ errortype: "age", errormsg: "Age is required." });
    } else if (value <= 0 || value > 150) {
        setError({ errortype: "age", errormsg: "Please enter a valid age." });
    } else {
        clearError("age");
    }
}

function validatePassword(value) {
    if (value.length < 8) {
        
        setError({ errortype: "password", errormsg: "Password must be at least 8 characters long." });
       
    } else {
        clearError("password");
    }
}

function clearError(field) {
    setError((prev) => (prev.errortype === field ? { errortype: "", errormsg: "" } : prev));
}
function checkPassword(cpass,pass){
   if (cpass.length < 8){

       setError({ errortype: "cpassword", errormsg: "Password must be at least 8 characters long." });
   }
   else if(cpass !== pass){
   
    setError({ errortype: "cpassword", errormsg: "Password does not matched" });
   }
   else {
    clearError("cpassword");
}
}

  function isFirstCharCapital(str) {
      if(str==""){
        return false
      }
      return /^[A-Z]/.test(str);
  }
    
    return (
     
        <div className="max-w-6xl mx-auto flex gap-2 flex-row justify-between p-4  border shadow  mt-5 ">
             {/* Left Div */}
             <div className="left hidden sm:flex flex-col justify-center items-center w-1/2">
    <img
        className="object-contain"
        style={{ height: "400px", width: "400px" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFqu5PwOjTwSuy-1VPrft72H0CAjP3HrzMQ&s"
        alt="Signup Illustration"
    />
    <p className="text-center font-serif text-3xl mt-4 text-gray-600">
        Discover your personality with <br/> the Big 5 Personality Test!
    </p>
</div>



            <div className="right flex flex-col md-p-6 p-4 md:w-1/2  w-full">
              <h1 className='text-2xl flex text-blue-500 font-semibold font-serif text-center flex-col  items-center gap-2 my-2'><FaBrain/>Big 5 <br />
              Personality Test</h1>
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <Box
                component="form"
                className="flex justify-center   items-center flex-col  w-full"
                sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }} // makes TextField take full width
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div className="w-full flex  sx={{ m: 1, width: '100%' }}">
                    <TextField
                       onChange={handleChange}
                        type="text"
                        id="outlined-email"
                        label="First name"
                        className="w-full"
                        error={error?.errortype === "firstname"}
                        name="firstname"
                        helperText={error?.errortype == 'firstname' ? error.errormsg : ""}
                        variant="outlined"
                        slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="start"><FaUser/></InputAdornment>,
                            },
                          }}
                    />
                    <TextField
                       onChange={handleChange}
                        type="text"
                        id="outlined-email"
                        label="Last name"
                        className="w-full"
                        name="lastname"
                        helperText={error?.errortype == 'lastname' ? error.errormsg : ""}
                        error={error?.errortype === "lastname"}
                        slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="start"><FaUser/></InputAdornment>,
                            },
                          }}
                        // helperText="Please enter a valid  username."
                        variant="outlined"
                    />
                </div>
                <div className="w-full flex  sx={{ m: 1, width: '100%' }}">
                    <TextField
                       onChange={handleChange}
                        type="email"
                        id="outlined-email"
                        label="Email"
                        className="w-full"
                        name="email"
                        helperText={error?.errortype == 'email' ? error.errormsg : ""}
                        error={error?.errortype === "email"}
                        variant="outlined"
                        slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="start"><FaEnvelope/></InputAdornment>,
                            },
                          }}
                    />
                    </div>
                    <div className="w-full flex mb-2  items-center  sx={{ m: 1, width: '100%' }}">
                    <TextField
                       onChange={handleChange}
                        type="text"
                        id="outlined-email"
                        label="Phone Number"
                        className="w-1/2"
                        name="phoneno"
                        helperText={error?.errortype == 'phoneno' ? error.errormsg : ""}
                        error={error?.errortype === "phoneno"}
                        variant="outlined"
                        slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="start"><FaPhone/></InputAdornment>,
                            },
                          }}
                    />
                       <TextField
          id="outlined-select-currency"
          select
          label="Designation"
          defaultValue="Student"
          name="designation"
          onChange={handleChange}
          helperText={error?.errortype == 'designation' ? error.errormsg : ""}
          error={error?.errortype === "designation"}
          
        >
        
            <MenuItem value="Student">
             Student
            </MenuItem>
        
            <MenuItem value="Teacher">
            Teacher
            </MenuItem>
            <MenuItem value="Professional">
            Professional
            </MenuItem>
         
        </TextField>
                    </div>
                    <div className="w-full flex  sx={{ m: 1, width: '100%' }}">
                    <TextField
                       onChange={handleChange}
                        type="text"
                        id="outlined-email"
                        label="username"
                        error={error?.errortype === "username"}
                        className="w-full"
                        name="username"
                        helperText={error?.errortype == "username"?error.errormsg :""}
                        variant="outlined"
                        slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="start"><FaUser/></InputAdornment>,
                            },
                          }}
                    />
                    </div>    

                    <div className="w-full flex  sx={{ m: 1, width: '100%' }}">
                    <TextField
                       onChange={handleChange}
                        type="text"
                        id="outlined-email"
                        label="age"
                        error={error?.errortype === "age"}
                        className="w-full"
                        name="age"
                        helperText={error?.errortype == "age"?error.errormsg :""}
                        variant="outlined"
                        slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="start"><FaUser/></InputAdornment>,
                            },
                          }}
                    />
                    </div>    
                <div className="w-full">
     <FormControl
    sx={{ m: 1, width: '96%' }}
    variant="outlined"
    error={error.errortype === "password"} // Highlights the input if there's a password error
>
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
    <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={formData.password || ""} // Ensure formData.password is never undefined
        onChange={handleChange}
        endAdornment={
            <InputAdornment position="end">
                <IconButton
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
            </InputAdornment>
        }
        label="Password"
    />
    {error.errortype === "password" && (
        <FormHelperText>{error.errormsg} </FormHelperText> // This will display the error message
        
    )}
             </FormControl>
     <FormControl
    sx={{ m: 1, width: '96%' }}
    variant="outlined"
    error={error.errortype === "cpassword"} // Highlights the input if there's a password error
>
    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
    <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name="cpassword"
        // Ensure formData.password is never undefined
        onChange={handleChange}
        endAdornment={
            <InputAdornment position="end">
                <IconButton
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
            </InputAdornment>
        }
        label="Confirm Password"
    />
    {error.errortype === "cpassword"  && (
        <FormHelperText>{error.errormsg} </FormHelperText> // This will display the error message
        
    )}
</FormControl>



                </div>
                <button disabled={error.errortype ? true:false}  className="bg-slate-700 relative   text-white p-3 mx-auto rounded-lg uppercase hover:opacity-95 disabled:opacity-80 w-full mt-4">
              
            Sign Up
         

                </button>
                <div className='  mt-3   '>
              <p>Already have an account? 
                <NavLink to="/login" className="text-blue-500 ml-2 font-bold">Sign in</NavLink>
              </p>
             
            </div>
            </Box>
            <div className="login-google text-center">
                <p>or</p>
               
                <button onClick={loginWithGoogle}   className="  relative border-2 flex justify-center items-center gap-2  p-3 mx-auto rounded-lg uppercase hover:opacity-95 disabled:opacity-80 w-80 mt-4">
                <FcGoogle  className="me-2" size={28}/>  Continue with google
                </button>
              </div>
          
        </div>
        </div>
      
    );
};

export default Signup;
