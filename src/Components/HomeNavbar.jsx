import { NavLink, Link } from 'react-router-dom';
import Logo from '../home-images/hafrikplay-logo.png';
import { useState } from 'react';

const navigation = [
  { name: 'About', href: '/About' },
  { name: 'Support', href: '/Support' },
  { name: 'Download', href: '/Download' },
];

const HomeNavbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenuIcon = () => {
    // setMenuIcon(true);
    console.log('true');
  };

  return (
    <nav className="w-full sm:px-6 lg:pl-[130px] lg:pb-[40px] lg:pt-[50px] lg:pr-[50px]">
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
            className="absolute sm:static left-3 top-3 w-[100px] sm:w-[160px]"
            src={Logo}
            alt="hafrikplay logo"
            width={160}
          />
        </Link>
        <div className="hidden items-center w-1/2 justify-between sm:ml-6 sm:flex">
          <div className="flex gap-[20px]">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => {
                  return (
                    'rounded-md flex  text-white text-[20px] font-semibold p-[10px]  ' +
                    (isActive
                      ? ' bg-gray-900 text-white'
                      : ' text-gray-300 hover:bg-white/[0.2] hover:text-[#14F195]')
                  );
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="absolute sm:static bg-[#14F195] w-[200px] py-[17px] mr-[50px] cursor-pointer rounded hover:bg-[#25ce88]">
            <Link className="flex justify-center items-center gap-[10px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                height={35}
                width={35}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z"
                    stroke="#000000"
                    strokeWidth="1"
                  ></path>{' '}
                  <path
                    d="M5 19.5C5 15.9101 7.91015 13 11.5 13H12.5C16.0899 13 19 15.9101 19 19.5V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V19.5Z"
                    stroke="#000000"
                    strokeWidth="1"
                  ></path>{' '}
                </g>
              </svg>
              <p className="text-[20px] font-semibold">Login</p>
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
