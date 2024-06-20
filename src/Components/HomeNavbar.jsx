import { useLocation, Link } from 'react-router-dom';
import Logo from '../home-images/hafrikplay-logo.png';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';

const navigation = [
  { name: 'About', href: '/About' },
  { name: 'Support', href: '/Support' },
  { name: 'Download', href: '/Download' },
];

const HomeNavbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const location = useLocation();

  const handleMenuIcon = () => {
    // setMenuIcon(true);
    console.log('true');
  };

  return (
    <nav className="w-full sm:px-6 lg:pl-[113px] lg:pb-[40px] lg:pt-[30px] lg:pr-[50px]">
      <div className="absolute right-3 top-3 " onClick={handleMenuIcon}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="relative flex h-16 items-center justify-between">
        <Link to="/">
          <img
            className="absolute sm:static left-3 top-3 w-[100px] sm:w-[100px]"
            src={Logo}
            alt="hafrikplay logo"
          />
        </Link>
        <div className="hidden items-center w-1/2 justify-between sm:ml-6 sm:flex">
          <ul className="flex gap-[20px] ">
            {navigation.map((item) => (
              <li
                key={item.name}
                className={
                  location.pathname === `{item.href}`
                    ? 'text-gray-300  hover:text-gray-500'
                    : ''
                }
              >
                <Link
                  to={item.href}
                  className="rounded-md text-white text-[1.05rem] font-semibold p-[10px] hover:text-[#14F195] hover:bg-white/[0.2]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute sm:static bg-[#14F195] w-[160px] py-[12px] mr-[50px] cursor-pointer rounded hover:bg-[#25ce88]">
            <Link className="flex justify-center items-center gap-[10px]">
              <FaRegUser className="h-6 w-6" />
              <p className="text-[1rem] font-semibold">Login</p>
            </Link>
          </div>
        </div>
        {menuIcon ? (
          <nav className="sm:hidden absolute w-full top-0 left-0 h-[400px] bg-[#171719]">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-white/[0.2] text-[#14F195]">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => {
                    return (
                      'rounded-md flex   text-[20px] font-semibold p-[10px]  ' +
                      (isActive
                        ? ' bg-gray-900 text-white'
                        : ' text-[#14F195] hover:bg-white/[0.2] hover:text-[#14F195] hover:')
                    );
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </nav>
  );
};
export default HomeNavbar;
