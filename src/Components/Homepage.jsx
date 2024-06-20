import Man from '../home-images/bg-man.jpg';

import Victor from '../home-images/viktor-forgacs.png';
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
        className="bg-cover bg-top bg-no-repeat h-[400px] sm:h-[656px] bg-gray-500"
        style={{ backgroundImage: `url(${Man})`, backgroundSize: '100% auto' }}
      >
        <HomeNavbar />
        <h1 className="text-[40px] sm:text-[120px] leading-[40px] sm:leading-[128px] text-white text-center sm:text-start sm:ml-[112px] mt-[40px] sm:mt-[30px]">
          Premium hub for african talents.
        </h1>
        <p className="text-white text-center sm:text-start sm:ml-[116px] mt-[5px] sm:mt-[18px] text-[15px] sm:text-[16px] tracking-wide">
          Discover, stream and share in a constantly expanding mix of music.
        </p>
        <div>
          <Button borderRadius="15px" className="border-neutral-200">
            <Link to="/musicplayer">
              <div className="flex justify-center items-center  gap-[10px] bg-[#14F195] hover:bg-[#25ce88] py-[17px] ml-[1px] w-[250px]">
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
        className="bg-cover bg-top bg-no-repeat h-[456px] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${Victor})` }}
      >
        <p className="text-center text-[64px] leading-[72px] text-white">
          Promote african music
        </p>
        <p className="text-center text-white text-[12px]">
          Share in a constantly expanding mix of african music from emerging and
          major artists around the world.
        </p>
        <div>
          <Link className="" to="/">
            <button className="bg-[#14F195] py-[12px] transition-[0.5s] comm-hover px-[32px] rounded-[4px] font-bold text-[15px] block mx-auto mt-[49px] h-[48px] w-[188px]">
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
