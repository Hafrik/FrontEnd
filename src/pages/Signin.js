import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Footer from '../components/Footer'

const Signin = () => {
  return (
    <div className="mother-container">
      <div className="mx-auto w-50 h-50 text-center pt-2">
        <h4>Login</h4>
      </div>
      <div className=" form-bg mx-auto h-50 mt-2 rounded-3 px-3">
        <div class="mb-2 mt-2">
          <label for="" class="form-label text-white-50">
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            class="form-control p-2"
            placeholder="Email address"
            aria-describedby="helpId"
          />
          <button className="btn btn-secondary w-100 my-3 p-2">Continue</button>
          <br />
          <small class="">
            <a href="./" className="link-offset-2 text-white fw-semibold">
              Forget Password
            </a>
          </small>
          <br />
          <div className="w-100 text-center">
            <span className="w-100">Or</span>
          </div>
          <button className="btn social-icons w-100 my-2 justify-content-center d-flex">
            <a href="http://facebook.com" className="nav-link">
              <FontAwesomeIcon icon={faFacebook} className="font-awesome" />
              <span className="social-span" style={{ margin: '0px auto' }}>
                Continue with Facebook
              </span>
            </a>
          </button>
          <button className="btn social-icons w-100 my-2 d-flex justify-content-center">
            <a href="https://myaccount.google.com/" className="nav-link">
              <FontAwesomeIcon icon={faGoogle} className="font-awesome" />
              <span className="social-span" style={{ margin: '0px auto' }}>
                {' '}
                Continue with Google
              </span>
            </a>
          </button>
          <button className="btn social-icons w-100 d-flex mb-4 justify-content-center">
            <a href="https://www.icloud.com/" className="nav-link">
              <FontAwesomeIcon icon={faApple} className="font-awesome" />
              <span className="social-span" style={{ margin: '0px auto' }}>
                Continue with Apple
              </span>
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signin
