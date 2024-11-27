import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer