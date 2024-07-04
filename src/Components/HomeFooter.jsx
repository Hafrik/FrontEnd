import Logo from '../../public/Images/Hafrikplay Logo.png';

import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <footer className="bg-[#171719] pl-[7.063rem] flex-col sm:flex-row flex gap-[3.125rem] sm:justify-center sm:gap-[21.875rem] pt-[9.375rem] pb-[15.625rem]">
      <div className="sm:">
        <img
          src={Logo}
          alt="hafrikplay-logo"
          className="w-[7rem] h-[2.813rem]"
        />
        <p className="text-white my-[0.313rem] text-[1rem] leading-[1.5rem]">
          Copyright &copy; 2022
        </p>
        <div className="flex gap-[1.25rem] mt-[1.875rem]">
          <Link to="/">
            <BsFacebook className="text-white w-[1.5rem] h-[1.563rem]" />
          </Link>
          <Link to="/">
            <FaTwitter className="text-white w-[1.5rem] h-[1.563rem]" />
          </Link>

          <Link to="/">
            <FaInstagram className="text-white w-[1.5rem] h-[1.563rem]" />
          </Link>

          <Link to="/">
            <FaLinkedin className="text-white w-[1.5rem] h-[1.563rem]" />
          </Link>
        </div>
      </div>
      <div className="sm:flex-row flex-col flex gap-[6.25rem]">
        <div>
          <p className="text-[1rem] text-[#14F195] font-semibold mb-[0.938rem]">
            Company
          </p>
          <ul>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">About</Link>
            </li>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounde">
              <Link to="/">Jobs</Link>
            </li>
            <li className="text-[1rem] text-white hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">For the record</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[1rem] text-[#14F195] font-semibold mb-[0.938rem]">
            Communities
          </p>
          <ul>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">For artists</Link>
            </li>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Adverting</Link>
            </li>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Investors</Link>
            </li>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Developers</Link>
            </li>
            <li className="text-[1rem] text-white hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Vendors</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[1rem] text-[#14F195] font-semibold mb-[0.938rem]">
            Useful Links
          </p>
          <ul>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Support</Link>
            </li>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Download Android</Link>
            </li>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Download IOS</Link>
            </li>
            <li className="text-[1rem] text-white mb-[0.625rem] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Web Player</Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-[1rem] text-white hover:bg-white/[0.2] hover:p-2 hover:rounded"
              >
                Free Mobile App
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default HomeFooter;
