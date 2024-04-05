import React from "react";

import { useState, useEffect } from "react";


const ResetPassword = () => {

    const initialValues = {password: "", password2: ""};
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
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
        } else if (values.password.length > 12) {
            errors.password = "Password cannot exceed more than 12 characters";
        }

        if (!values.password2) {
            errors.password2 = "Password is required";
        } else if (values.password2.length < 6) {
            errors.password2 = "Password must be more than 6 characters";
        } else if (values.password2.length > 12) {
            errors.password2 = "Password cannot exceed more than 12 characters";
        } else if (values.password !== values.password2) {
            errors.password2 = "Password does not match"
        }
        return errors;
    };

    return  (
        <div className="password">
            <p>Reset Password</p>
            <p>Kindly input your new password below and also confirm your new password.</p>
            <div className="formCard">
                <form action="" className="form" onSubmit={handleSubmit}>
                    <div className="form_control">
                        <label for="password">New Password</label> <br/>
                        <input type="password" name="password" placeholder="New Passeword" value={formValues.password} onChange={handleChange} /> <br/>
                        <div>{formErrors.password}</div>
                    </div>
                    <div className="form_control">
                        <label for="password2">Confirm New Password</label> <br/>
                        <input type="password" name="password2" placeholder="Confirm New Passeword" value={formValues.password2} onChange={handleChange} /> <br/>
                        <div>{formErrors.password2}</div>
                    </div>
                    <button type="submit">Continue</button>
                </form>
                <p>Don’t have an account? <a href="http://" target="_blank" rel="noopener noreferrer">Sign up</a></p>
            </div>
        </div>
    );
}

export default ResetPassword;
