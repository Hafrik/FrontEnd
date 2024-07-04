import React from 'react';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyRight">Hafrikplay Copyright © 2022</div>
      <div className="footerMenus">
        <a
          href="http://"
          target="_blank"
          title="Go to Privacy policy page"
          rel="noopener noreferrer"
        >
          Privacy policy
        </a>

        <a
          href="http://"
          target="_blank"
          title="Go to Terms and Conditions page"
          rel="noopener noreferrer"
        >
          Terms and Conditions
        </a>

        <a
          href="http://"
          target="_blank"
          title="Go to Download page"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>

      <div className="footerSocials">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Socials
            img={
              <img
                src="./Images/Facebook White Vector.png"
                alt="Facebook"
                srcSet=""
                title="Go to Facebook page"
              />
            }
          />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Socials
            img={
              <img
                src="./Images/Twitter White Vector.png"
                alt="X"
                srcSet=""
                title="Go to X page"
              />
            }
          />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Socials
            img={
              <img
                src="./Images/Instagram White.png"
                alt="Instagram"
                srcSet=""
                title="Go to Instagram page"
              />
            }
          />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Socials
            img={
              <img
                src="./Images/LinkedIn White Vector.png"
                alt="LinkedIn"
                srcSet=""
                title="Go to LinkedIn page"
              />
            }
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
