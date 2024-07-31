import { useLocation, Link } from 'react-router-dom';
import Logo from '/Images/Hafrikplay Logo.png';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { CiMenuBurger } from 'react-icons/ci';

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
    <nav className="w-full sm:px-6 lg:pl-[7.063rem] lg:pb-[2.5rem] lg:pt-[1.875rem] lg:pr-[3.125rem]">
      <div
        className="absolute right-3 top-3 sm:hidden"
        onClick={handleMenuIcon}
      >
        <CiMenuBurger className="w-8 h-8" />
      </div>
      <div className="relative flex h-16 items-center justify-between">
        <Link to="/">
          <img
            className="absolute sm:static left-3 top-3 w-[6.25rem] sm:w-[6.25rem]"
            src={Logo}
            alt="hafrikplay logo"
          />
        </Link>
        <div className="hidden items-center w-1/2 justify-between sm:ml-6 sm:flex">
          <ul className="flex gap-[1.25rem] ">
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
          <div className="absolute sm:static bg-[#14F195] w-[10rem] py-[0.75rem] mr-[3.125rem] cursor-pointer rounded hover:bg-[#25ce88]">
            <Link
              to="/login"
              className="flex justify-center items-center gap-[0.625rem]"
            >
              <FaRegUser className="h-6 w-6" />
              <p className="text-[1rem] font-semibold">Login</p>
            </Link>
          </div>
        </div>
        {menuIcon ? (
          <nav className="hidden absolute w-full top-0 left-0 h-[25rem] bg-[#171719]">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-white/[0.2] text-[#14F195]">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => {
                    return (
                      'rounded-md flex   text-[1.25rem] font-semibold p-[0.625rem]  ' +
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
