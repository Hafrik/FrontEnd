import React from 'react'
import '../App.css'

const Navbar = (props) => {
  return (
    <>
      <nav className="d-sm-grid" style={{ background: '#171719' }}>
        <div className="row">
          <div className="col" style={{ margin: '10px 0px 0px 10%' }}>
            <a className="navbar-brand text-white" href="/signin">
              <img src="/images/green.png" alt="BrandName" />
            </a>
          </div>
          <div className="col pt-2">
            <ul
              className="nav-item d-flex gap-3 justify-content-end"
              style={{ margin: '10px 30% 0px 0px' }}
            >
              <li className="nav-link">
                <a
                  href="nav-link"
                  style={{ textDecoration: 'none', color: '#ffff' }}
                >
                  About
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="nav-link"
                  style={{ textDecoration: 'none', color: '#ffff' }}
                >
                  Support
                </a>
              </li>
              <li className="nav-link">
                <a
                  href="nav-link"
                  style={{ textDecoration: 'none', color: '#ffff' }}
                >
                  download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </>
  )
}

export default Navbar
