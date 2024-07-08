import React from 'react'

const Validation = () => {

    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (email === ""){
      errors.email = "email is required";
    }
    else if(!email_pattern.test(email)) {
      errors.email = "Please enter a valid email";
    }
  
    if (password === ""){
      errors.password = "Password is required";
    }
    else if(!password_pattern.test(password)) {
      errors.password = "Password must have at least one number and one small and capital character";
    }
  return (
    errors
  )
}

export default Validation