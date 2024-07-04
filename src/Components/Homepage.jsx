import Man from '../home-images/bg-man.jpg';

import Victor from '../home-images/viktor-forgacs.jpg';
import HomeNavbar from './HomeNavbar';
import { Link } from 'react-router-dom';
import HomeFooter from './HomeFooter';
import { Button } from './MovingBorder';
import Homebody from './Homebody';
import { LuMusic } from 'react-icons/lu';

const Homepage = () => {
  return (
    <>
      <header
        className="bg-cover bg-top bg-no-repeat h-[25rem] sm:h-[41rem] bg-gray-500"
        style={{ backgroundImage: `url(${Man})`, backgroundSize: '100% auto' }}
      >
        <HomeNavbar />
        <h1 className="text-[2.5rem] sm:text-[7.5rem] leading-[2.5rem] sm:leading-[8rem] text-white text-center sm:text-start sm:ml-[7rem] mt-[2.5rem] sm:mt-[1.875rem]">
          Premium hub for african talents.
        </h1>
        <p className="text-white text-center sm:text-start sm:ml-[7.25rem] mt-[0.313rem] sm:mt-[1.125rem] text-[0.938rem] sm:text-[1rem] tracking-wide">
          Discover, stream and share in a constantly expanding mix of music.
        </p>
        <div>
          <Button borderRadius="15px" className="border-neutral-200">
            <Link to="/musicplayer">
              <div className="flex justify-center items-center  gap-[0.625rem] bg-[#14F195] hover:bg-[#25ce88] py-[1.063rem] ml-[1px] w-[15.625rem]">
                <LuMusic className="text-black w-6 h-6" />
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
        className="bg-cover bg-top bg-no-repeat h-[28.5rem] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${Victor})` }}
      >
        <p className="text-center text-[4rem] leading-[4.5rem] text-white">
          Promote african music
        </p>
        <p className="text-center text-white text-[0.75rem]">
          Share in a constantly expanding mix of african music from emerging and
          major artists around the world.
        </p>
        <div>
          <Link className="" to="/">
            <button className="bg-[#14F195] py-[0.75rem] transition-[0.5s] comm-hover px-[2rem] rounded-[0.25rem] font-bold text-[0.938rem] block mx-auto mt-[3.063rem] h-[3rem] w-[11.75rem]">
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
