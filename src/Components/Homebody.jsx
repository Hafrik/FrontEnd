import Card2 from '../home-images/card-2.png';
import Card3 from '../home-images/card-3.png';
import Unsplash2 from '../home-images/unsplash-2.png';
import Apple from '../home-images/app-store.png';
import Google from '../home-images/google-play.png';
import { Link } from 'react-router-dom';

const Homebody = () => {
  return (
    <>
      <section className="bg-[#171719] relative pt-[146px] pb-[10px]">
        <h1 className="text-white text-[64px] ml-[115px] leading-[72px] tracking-wide">
          Listen to music <br /> everywhere & anywhere
        </h1>
        <section className="flex">
          <article className="-mr-[70px]">
            <p className="text-white text-[16px] ml-[115px] w-full mt-[20px] mb-[50px]">
              Want to listen to music on the go? hafrikPlay is the best option
              for you to <br />
              listen to African Talents for free.
            </p>
            <div className="flex w-[667px] mt-[70px]">
              <img src={Card2} className="w-full" alt="" />
              <img src={Card3} className="w-full" alt="" />
            </div>

            <div className="absolute left-[35%] top-[51%]">
              <p>
                <span className="text-[#1BA267] text-[17px] tracking-[3px]">
                  PERSONALIZE
                </span>
                &nbsp;
                <span className="text-white text-[17px] font-light tracking-[3px]">
                  LISTENING
                </span>
              </p>
              <p className="-mt-[25px]">
                <span className="text-white font-semibold text-[58px] tracking-tight">
                  Xperience
                </span>
              </p>
            </div>
            <div className="ml-[117px] mt-[194px] bg-[#14F195] px-[24px] py-[32px] rounded-[2px] w-[550px] h-[174px] flex flex-col justify-center gap-[8px]">
              <p className="text-[16px] tracking-[3px]">CREATE PLAYLIST</p>
              <p className="text-[12px] pr-[10px]">
                Share in a constantly expanding mix of african music from
                emerging and major artists around the world.
              </p>
              <button className="bg-[#171719] text-white font-light rounded-[4px] mt-2 px-[24px] py-[8px] tracking-wider w-[136px] h-[40px] text-[12px]">
                <Link to="/signup">Sign up for free</Link>
              </button>
            </div>
            <div className="ml-[117px] mt-[54px] bg-[#14F195] px-[24px] py-[32px] rounded-[2px] w-[550px] h-[174px] flex flex-col justify-center gap-[8px]">
              <p className="text-[16px] tracking-[3px]">
                UPLOAD YOUR OWN MUSIC
              </p>
              <p className="text-[12px] pr-[10px]">
                Share in a constantly expanding mix of african music from
                emerging and major artists around the world.
              </p>
              <button className="bg-[#171719] text-white font-light rounded-[4px] mt-2 px-[24px] py-[8px] tracking-wider w-[148px] h-[40px] text-[12px]">
                <Link to="/uploadsong">Share your sound</Link>
              </button>
            </div>
          </article>
          <aside className="-mt-[120px]">
            <img src={Unsplash2} height={1160} className="" alt="" />
          </aside>
        </section>
      </section>
      <section className="bg-[#36363A] pl-[112px] pt-[148px] pb-[217px]">
        <p
          className="text-[56px] text-[#FCFCFC] w-[70%] h-[216px] leading-[72px]"
          style={{
            dropShadow: '0 5px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          Seamlessly listen to music you love. Download the Hafrikplay app for
          your Device.
        </p>
        <div className="flex gap-[40px] mt-[56px] ">
          <a href="#">
            <img src={Apple} alt="app-store" className="w-[164px] h-[51px]" />
          </a>
          <a href="#">
            <img
              src={Google}
              alt="google-play"
              className="w-[164px] h-[51px]"
            />
          </a>
        </div>
      </section>
    </>
  );
};
export default Homebody;
