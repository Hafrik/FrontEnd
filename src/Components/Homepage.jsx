import Man from '../home-images/bg-man.jpg';

import Victor from '../home-images/viktor-forgacs.png';
import Card2 from '../home-images/card-2.png';
import Card3 from '../home-images/card-3.png';
import HomeNavbar from './HomeNavbar';
import { Link } from 'react-router-dom';
import HomeFooter from './HomeFooter';
import { Button } from './MovingBorder';
import Homebody from './Homebody';

const Homepage = () => {
  return (
    <>
      <header
        className="bg-cover bg-top bg-no-repeat h-[400px] sm:h-[820px] bg-gray-500"
        style={{ backgroundImage: `url(${Man})`, backgroundSize: '100% auto' }}
      >
        <HomeNavbar />
        <h1 className="text-[40px] sm:text-[150px] leading-[40px] sm:leading-[155px] text-white text-center sm:text-start sm:ml-[140px] mt-[40px] sm:mt-[60px]">
          Premium hub for african talents.
        </h1>
        <p className="text-white text-center sm:text-start sm:ml-[145px] mt-[5px] sm:mt-[26px] text-[15px] sm:text-[20px] tracking-wide">
          Discover, stream and share in a constantly expanding mix of music.
        </p>
        <div>
          <Button borderRadius="15px" className="w-full border-neutral-200">
            <Link to="/musicplayer">
              <div className="flex justify-center items-center  gap-[10px] bg-[#14F195] hover:bg-[#25ce88] py-[17px] ml-[1px] w-[250px]">
                <svg
                  viewBox="0 0 24 24"
                  height={35}
                  width={35}
                  fill="none"
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
                      d="M9 18V6.35537C9 5.87383 9 5.63306 9.0876 5.43778C9.16482 5.26565 9.28917 5.11887 9.44627 5.0144C9.62449 4.89588 9.86198 4.8563 10.337 4.77714L19.137 3.31047C19.7779 3.20364 20.0984 3.15023 20.3482 3.243C20.5674 3.32441 20.7511 3.48005 20.8674 3.68286C21 3.91398 21 4.23889 21 4.8887V16M9 18C9 19.6568 7.65685 21 6 21C4.34315 21 3 19.6568 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18ZM21 16C21 17.6568 19.6569 19 18 19C16.3431 19 15 17.6568 15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{' '}
                  </g>
                </svg>

                <p className="text-[20px] text-black font-semibold">
                  Play music
                </p>
              </div>
            </Link>
          </Button>
        </div>
      </header>
      <Homebody />
      <section
        className="bg-cover bg-top bg-no-repeat h-[700px] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${Victor})` }}
      >
        <p className="text-center text-[100px] text-white">
          Promote african music
        </p>
        <p className="text-center text-white text-[18px]">
          Share in a constantly expanding mix of african music from emerging and
          major artists around the world.
        </p>
        <div>
          <Link className="" to="/">
            <button className="bg-[#14F195] py-[18px] block transition-[0.5s] comm-hover px-[50px] rounded-[5px] font-bold text-[25px] block mx-auto mt-[50px]">
              Join community
            </button>
          </Link>
        </div>
      </section>
      <HomeFooter />
    </>
  );
};
export default Homepage;
