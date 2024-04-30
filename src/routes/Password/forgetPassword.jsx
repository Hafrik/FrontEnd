import React from "react";

import { useState, useEffect } from "react";


const forgetPassword = () => {

    const initialValues = {email: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
        }
    }, [formErrors, isSubmit]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        return errors;
    };

    return  ( 
        <div className="emailInput">
            <p>Forget Password</p>
            <p>No worries, we will send you reset instructions.</p>
            <div className="formCard">
                <form action="" className="form" onSubmit={handleSubmit}>
                    <div className="form_control">
                        <label for="email">Email</label> <br/>
                        <input type="text" name="email" placeholder="Email address" value={formValues.email} onChange={handleChange} /> <br/>
                        <div>{formErrors.email}</div>
                    </div>
                    <button type="submit">Continue</button>
                </form>
                <p>Don’t have an account? <a href="http://" target="_blank" rel="noopener noreferrer">Sign up</a></p>
            </div>
        </div>
    );
}

export default forgetPassword;
