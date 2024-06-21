import Logo from '../../public/Images/Hafrikplay Logo.png';

import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <footer className="bg-[#171719] pl-[113px] flex-col sm:flex-row flex gap-[30px] sm:justify-center sm:gap-[350px] pt-[150px] pb-[250px]">
      <div className="sm:">
        <img src={Logo} alt="hafrikplay-logo" className="w-[112px] h-[45px]" />
        <p className="text-white my-[5px] text-[16px] leading-[24px]">
          Copyright &copy; 2022
        </p>
        <div className="flex gap-[20px] mt-[30px]">
          <Link to="/">
            <BsFacebook className="text-white w-[24px] h-[25px]" />
          </Link>
          <Link to="/">
            <FaTwitter className="text-white w-[24px] h-[25px]" />
          </Link>

          <Link to="/">
            <FaInstagram className="text-white w-[24px] h-[25px]" />
          </Link>

          <Link to="/">
            <FaLinkedin className="text-white w-[24px] h-[25px]" />
          </Link>
        </div>
      </div>
      <div className="sm:flex-row flex-col flex gap-[100px]">
        <div>
          <p className="text-[16px] text-[#14F195] font-semibold mb-[15px]">
            Company
          </p>
          <ul>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">About</Link>
            </li>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounde">
              <Link to="/">Jobs</Link>
            </li>
            <li className="text-[16px] text-white hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">For the record</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[16px] text-[#14F195] font-semibold mb-[15px]">
            Communities
          </p>
          <ul>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">For artists</Link>
            </li>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Adverting</Link>
            </li>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Investors</Link>
            </li>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Developers</Link>
            </li>
            <li className="text-[16px] text-white hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Vendors</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[16px] text-[#14F195] font-semibold mb-[15px]">
            Useful Links
          </p>
          <ul>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Support</Link>
            </li>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Download Android</Link>
            </li>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Download IOS</Link>
            </li>
            <li className="text-[16px] text-white mb-[10px] hover:bg-white/[0.2] hover:pl-2 hover:rounded">
              <Link to="/">Web Player</Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-[16px] text-white hover:bg-white/[0.2] hover:p-2 hover:rounded"
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
