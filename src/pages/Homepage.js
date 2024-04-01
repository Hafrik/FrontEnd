import Man from '../images/bg-man.jpg';
import Apple from '../images/app-store.png';
import Google from '../images/google-play.png';
import Victor from '../images/viktor-forgacs.png';
import Card2 from '../images/card-2.png';
import Card3 from '../images/card-3.png';
import Unsplash2 from '../images/unsplash-2.png';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import HomeFooter from '../components/HomeFooter';
import { Button } from '../components/MovingBorder';

const Homepage = () => {
  return (
    <>
      <header
        className="bg-cover bg-top bg-no-repeat h-[400px] sm:h-[820px] bg-gray-500"
        style={{ backgroundImage: `url(${Man})`, backgroundSize: '100% auto' }}
      >
        <Header />
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
      <section className="bg-[#171719] relative pt-[200px] pb-[10px]">
        <h1 className="text-white text-[80px] ml-[150px] leading-[90px]">
          Listen to music <br /> everywhere & anywhere
        </h1>
        <section className="flex">
          <article className=" ">
            <p className="text-white text-[20px] ml-[150px] w-full my-[50px]">
              Want to listen to music on the go? hafrikPlay is the best option
              for you to listen to African Talents for free.
            </p>
            <div className="flex w-[112%] mt-[110px]">
              <img src={Card2} className="w-full" alt="" />
              <img src={Card3} className="w-full" alt="" />
            </div>

            <div className="absolute left-[33%] top-[54%]">
              <p>
                <span className="text-[#1BA267] text-[20px] tracking-[4px]">
                  PERSONALIZE
                </span>
                &emsp;
                <span className="text-white text-[20px] font-light tracking-[4px]">
                  LISTENING
                </span>
              </p>
              <p className="-mt-[25px]">
                <span className="text-white font-semibold text-[70px] tracking-tight">
                  Xperience
                </span>
              </p>
            </div>
            <div className="ml-[150px] mt-[270px] bg-[#14F195] px-[30px] pt-[40px] pb-[20px] rounded w-[calc(110%-100px)]">
              <p className="text-[20px] tracking-[4px]">CREATE PLAYLIST</p>
              <p className="my-[20px] text-[15px]">
                Share in a constantly expanding mix of african music from
                emerging and major artists around the world.
              </p>
              <button className="bg-[#171719] text-white font-light rounded-md px-[30px] py-[12px] tracking-wider">
                <Link to="/signup">Sign up for free</Link>
              </button>
            </div>
            <div className="bg-[#14F195] pb-[40px] px-[30px] pt-[40px] ml-[150px] rounded mt-[60px] w-[calc(110%-100px)]">
              <p className="text-[20px] tracking-[4px]">
                UPLOAD YOUR OWN MUSIC
              </p>
              <p className="my-[20px] text-[15px]">
                Share in a constantly expanding mix of african music from
                emerging and major artists around the world.
              </p>
              <button className="bg-[#171719] text-white font-light rounded-md px-[30px] py-[15px] tracking-wider">
                <Link to="/uploadsong">Share your sound</Link>
              </button>
            </div>
          </article>
          <aside className="-mt-[150px]">
            <img
              src={Unsplash2}
              height={1160}
              className="object-cover w-[250%]"
              alt=""
            />
          </aside>
        </section>
      </section>
      <section className="bg-[#36363A] pl-[120px] pt-[165px] pb-[250px]">
        <p
          className="text-[72px] text-[#FCFCFC] w-[70%]"
          style={{
            dropShadow: '0 5px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          Seamlessly listen to music you love. Download the Hafrikplay app for
          your Device.
        </p>
        <div className="flex gap-[40px] mt-[70px] ">
          <a href="#">
            <img src={Apple} alt="app-store" width={240} />
          </a>
          <a href="#">
            <img src={Google} alt="google-play" width={240} />
          </a>
        </div>
      </section>
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
