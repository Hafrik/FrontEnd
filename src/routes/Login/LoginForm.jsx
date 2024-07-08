import React from 'react';
import { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Validation from './Validation';

export const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setErrors(Validation(email, password));
  };


  return (
    <div>
      <h4 className="text-white text-center text-capitalize mt-4">
        sign up or login
      </h4>
      <form
        action="//"
        className="form text-capitalize rounded w-50"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label
            htmlFor="email"
            className="d-sm-block text-capitalize mb-1 text-white"
          >
            email address
          </label>
          <input
            type="email"
            className="form-input w-75 rounded text-white"
            id="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.email && <div className="text-danger fs-6">{errors.email}</div>}
        </div>
        <div className="">
          <label
            htmlFor="password"
            className="d-sm-block text-capitalize mb-1 text-white"
          >
            password
          </label>
          <input
            type="password"
            className="form-input w-75 rounded text-white"
            id="password"
            name="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }} 
          />
          {errors.password && <div className="text-danger fs-6">{errors.password}</div>}
        </div>
        <button type="submit" className="btn mt-4 w-100">
          Continue
        </button>

        <h5 className="text-white text-center text-capitalize m-3">or</h5>

        <div className="btn-links">
          <button type="submit" className="w-100 mb-3 btn btn-block">
            <BsFacebook className="icons"  />
            Continue with Facebook
          </button>
          <button type="submit" className="w-100 mb-3 btn btn-block">
            <FaGoogle className='icons' />
            Continue with Google
          </button>
          <button type="submit" className="w-100 mb-3 btn btn-block">
            <FaApple className='icons' />
            Continue with Apple
          </button>
        </div>
      </form>

      <div className="foot d-sm-flex justify-content-between mt-5 pt-4">
        <div className="text-white ps-5 mt-6">
          <p>Hafrikplay Copyright &copy; 2022</p>
        </div>
        <div className="d-sm-flex text-white">
          <p className="me-3">Privacy</p>
          <p className="me-3">Terms and Conditions</p>
          <p>Download</p>
        </div>
        <div className="text-white pe-5 mt-6">
          <Link to="/" className="pe-3">
            <BsFacebook className="text-white" />
          </Link>
          <Link to="/" className="pe-3">
            <FaTwitter className='text-white' />
          </Link>
          <Link to="/" className="pe-3">
            <FaInstagram className="text-white" />
          </Link>
          <Link to="/" className="pe-3">
            <FaLinkedin className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}
