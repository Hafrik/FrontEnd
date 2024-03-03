import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Signin = () => {
  return (
    <div className="mother-container">
      <div className="mx-auto w-50 h-50 text-center pt-4">
        <h4>Loging</h4>
      </div>
      <div className="form-bg mx-auto w-50 h-50 mt-3 rounded-3">
        <div class="mb-3">
          <label for="" class="form-label text-white-50">
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            class="form-control"
            placeholder="Email address"
            aria-describedby="helpId"
          />
          <button className="btn btn-secondary w-100 my-4">Continue</button>
          <br />
          <small class="">
            <a href="./" className="link-offset-2 text-white">
              Forget Password
            </a>
          </small>
          <br />
          <div className="w-100 text-center py-4 pb-3">
            <span className="w-100">Or</span>
          </div>
          <button className="btn social-icons w-100 text-center rounded-2 p-1">
            <a href="http://facebook.com" className="nav-link py-1">
              <FontAwesomeIcon icon={faFacebook} />
              <span className="px-5">Continue with Facebook</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signin
