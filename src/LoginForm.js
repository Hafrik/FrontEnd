import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faApple,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Validation from "./Validation";

const LoginForm = () => {

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
            name="Email"
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
            <FontAwesomeIcon icon={faFacebook} className="icons" />
            Continue with Facebook
          </button>
          <button type="submit" className="w-100 mb-3 btn btn-block">
            <FontAwesomeIcon icon={faGoogle} className="icons" />
            Continue with Google
          </button>
          <button type="submit" className="w-100 mb-3 btn btn-block">
            <FontAwesomeIcon icon={faApple} className="icons" />
            Continue with Apple
          </button>
        </div>
      </form>

      <div className="foot d-sm-flex justify-content-between mt-5">
        <div className="text-white ps-5 mt-6">
          <p>Hafrikplay Copyright &copy; 2022</p>
        </div>

        <div className="text-white pe-6 mt-6">
          <a href="/" className="pe-3">
            <FontAwesomeIcon icon={faFacebook} className="text-white" />
          </a>
          <a href="/" className="pe-3">
            <FontAwesomeIcon icon={faTwitter} className="text-white" />
          </a>
          <a href="/" className="pe-3">
            <FontAwesomeIcon icon={faInstagram} className="text-white" />
          </a>
          <a href="/" className="pe-3">
            <FontAwesomeIcon icon={faLinkedin} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};


export default LoginForm;
