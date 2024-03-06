import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <nav className="pb-2">
      <hr />
      <div className="container-fluid d-flex justify-content-between ms-5">
        <p className="f-text">Hafrikplay Copyright © 2024</p>

        <div className="d-inline-flex gap-3 f-text">
          <a href="./" className="nav-link">
            Privacy policy
          </a>
          <a href="./" className="nav-link">
            Terms and conditions
          </a>
          <a href="./" className="nav-link">
            Download
          </a>
        </div>
        <div className=" foot-Icons float-end me-5 f-text">
          <FontAwesomeIcon icon={faFacebook} className="me-3" />
          <FontAwesomeIcon icon={faTwitter} className="me-3" />
          <FontAwesomeIcon icon={faInstagram} className="me-3" />
          <FontAwesomeIcon icon={faLinkedin} className="me-3" />
        </div>
      </div>
    </nav>
  )
}

export default Footer
