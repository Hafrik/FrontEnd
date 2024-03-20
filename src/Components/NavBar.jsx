import React from "react";

const NavBar = () => {
    return <nav className="navBar">
        <img src="./Images/Hafrikplay Logo.png" alt="Hafrikplay Logo" />
            <div className="menus">
                <ul>
                    <li>
                        <a href="http://" target="_blank" title="Go to Hafrikplay About Us page"
                            rel="noopener noreferrer">About</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" title="Go to Hafrikplay Support page"
                            rel="noopener noreferrer">Support</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" title="Go to Hafrikplay Download page"
                            rel="noopener noreferrer">Download</a>
                    </li>
                </ul>
            </div>
    </nav>
}

export default NavBar;