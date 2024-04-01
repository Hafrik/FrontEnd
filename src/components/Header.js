import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/hafrikplay-logo.png';

const navigation = [
  { name: 'About', href: '/About' },
  { name: 'Support', href: '/Support' },
  { name: 'Download', href: '/Download' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header(props) {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="w-full sm:px-6 lg:pl-[130px] lg:pb-[40px] lg:pt-[50px] lg:pr-[50px]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Link to="/">
                <img
                  className="absolute sm:static right-[5px] top-[10px] w-[100px] sm:w-[160px]"
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
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
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
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
