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
const [errors, setErrors] = useState({});
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
 
    const validators = {
        firstname: (value) => {
            if (!value || value.trim() === '') {
                return 'First name is required.';
            }
            return /^[A-Z]/.test(value) ? '' : 'First name should start with a capital letter.';
        },
        lastname: (value) => {
            if (!value || value.trim() === '') {
                return 'Last name is required.';
            }
            return /^[A-Z]/.test(value) ? '' : 'Last name should start with a capital letter.';
        },
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format.',
        phoneno: (value) => /^(\+91[\-\s]?)?[6-9]\d{9}$/.test(value) ? '' : 'Invalid phone number.',
        username: (value) => value && value.length >= 5 ? '' : 'Username must be at least 5 characters long.',
        password: (value) => value && value.length >= 8 ? '' : 'Password must be at least 8 characters long.',
        age: (value) => value > 0 && value <= 150 ? '' : 'Age must be between 1 and 150.',
        cpassword: (value, password) => value === password ? '' : 'Passwords do not match.',
    };
    
    
    const loginWithGoogle = () => {
        window.open('https://big5-personality-backend-1.onrender.com/auth/google/callback', '_self');
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };
    const validateField = (name, value) => {
        const errorMsg = validators[name]
            ? validators[name](value, formData.password)
            : '';
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = Object.values(errors).every((err) => !err) &&
            Object.values(formData).every((field) => field.trim());

        if (!isValid) {
            Swal.fire('Error', 'Please fix all errors before submitting.', 'error');
            return;
        }

        try {
            const res = await axios.post('https://big5-personality-backend-1.onrender.com/user/signup', formData);
            if (res.data.success) {
                Swal.fire('Success', 'Registered successfully!', 'success').then(() => {
                    navigate('/login');
                });
            }
        } catch (err) {
            Swal.fire('Error', err.response?.data?.message || 'Something went wrong.', 'error');
        }
    };
    const isFormValid = () => {
        return (
            !error.errortype && // No errors
            formData.firstname.trim() &&
            formData.lastname.trim() &&
            formData.email.trim() &&
            formData.username.trim() &&
            formData.password.trim() &&
            formData.cpassword.trim() &&
            formData.password === formData.cpassword // Confirm password matches
        );
    };
    


    return (
     
        <div className="max-w-6xl mx-auto flex gap-2 flex-row justify-between   border shadow  mt-5 ">
             {/* Left Div */}
             <div className="left hidden bg-blue-50 sm:flex flex-col justify-center items-center w-1/2">
    <img
        className="object-contain"
        style={{ height: "400px", width: "400px",borderRadius:"40px" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFqu5PwOjTwSuy-1VPrft72H0CAjP3HrzMQ&s"
        alt="Signup Illustration"
    />
    <p className="text-center font-serif text-3xl mt-4 text-gray-600">
        Discover your personality with <br/> the Big 5 Personality Test!
    </p>
</div>



            <div className="right flex flex-col md:p-6 p-5 md:w-1/2  w-full">
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
                        error={!!errors.firstname}
                        helperText={errors.firstname}
                        name="firstname"
                        
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
                        error={!!errors.lastname}
                helperText={errors.lastname}
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
                        error={!!errors.email}
                helperText={errors.email}
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
                        error={!!errors.phoneno}
                        helperText={errors.phoneno}
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
          error={!!errors?.designation}
                helperText={errors?.designation}
          
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
                        
                        className="w-full"
                        name="username"
                        error={!!errors?.username}
                        helperText={errors?.username}
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
                   
                        className="w-full"
                        name="age"
                        error={!!errors.age}
                        helperText={errors.age}
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
    error={!!errors.password} // Highlights the input if there's a password error
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
    
    {!!errors.password && (
        <FormHelperText>{errors.password} </FormHelperText> // This will display the error message
        
    )}
             </FormControl>
     <FormControl
    sx={{ m: 1, width: '96%' }}
    variant="outlined"
    error={!!errors.cpassword} // Highlights the input if there's a password error
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
    {!!errors.cpassword  && (
        <FormHelperText>{errors.cpassword} </FormHelperText> // This will display the error message
        
    )}
</FormControl>



                </div>
                <button disabled={isFormValid}  className="bg-slate-700 relative   text-white p-3 mx-auto rounded-lg uppercase hover:opacity-95 disabled:opacity-80 w-full mt-4">
              
            Sign Up
         

                </button>
                <div className='  mt-3   '>
              <p>Already have an account? 
                <NavLink to="/login" className="text-blue-500 ml-2 font-bold">Sign in</NavLink>
              </p>
             
            </div>
            </Box>
            {/* <div className="login-google text-center">
                <p>or</p>
               
                <button onClick={loginWithGoogle}   className="  relative border-2 flex justify-center items-center gap-2  p-3 mx-auto rounded-lg uppercase hover:opacity-95 disabled:opacity-80 w-80 mt-4">
                <FcGoogle  className="me-2" size={28}/>  Continue with google
                </button>
              </div> */}
          
        </div>
        </div>
      
    );
};

export default Signup;
