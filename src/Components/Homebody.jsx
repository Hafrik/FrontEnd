import Card2 from '../home-images/card-2.jpg';
import Card3 from '../home-images/card-3.jpg';
import Unsplash2 from '../home-images/unsplash-2.jpg';
import Apple from '../home-images/app-store.jpg';
import Google from '../home-images/google-play.jpg';
import { Link } from 'react-router-dom';

const Homebody = () => {
  return (
    <>
      <section className="bg-[#171719] relative pt-[9.125rem] pb-[0.625rem]">
        <h1 className="text-white text-[4rem] ml-3 sm:ml-[7.188rem] leading-[4.5rem] tracking-wide">
          Listen to music <br /> everywhere & anywhere
        </h1>
        <section className="flex flex-col sm:flex-row">
          <article className="mr-1 sm:-mr-[4.375rem]">
            <p className="text-white text-[16px] ml-5 sm:ml-[7.188rem] w-full mt-[1.25rem] mb-[3.125rem]">
              Want to listen to music on the go? hafrikPlay is the best option
              for you to <br />
              listen to African Talents for free.
            </p>
            <div className="flex flex-col sm:flex-row w-[80%] sm:w-[41.688rem] mt-[4.375rem]">
              <img src={Card2} className="w-full" alt="" loading="lazy" />
              <img src={Card3} className="w-full" alt="" loading="lazy" />
            </div>

            <div className="absolute left-[5%] sm:left-[35%] top-[20%] sm:top-[51%]">
              <p>
                <span className="text-[#1BA267] text-[1.063rem] tracking-[0.188rem]">
                  PERSONALIZE
                </span>
                &nbsp;
                <span className="text-white text-[1.063rem] font-light tracking-[0.188rem]">
                  LISTENING
                </span>
              </p>
              <p className="-mt-[1.563rem]">
                <span className="text-white font-semibold text-[3.625rem] tracking-tight">
                  Xperience
                </span>
              </p>
            </div>
            <div className="ml-5 sm:ml-[7.313rem] mt-[12.125rem] bg-[#14F195] px-[1.5rem] py-[2rem] rounded-[0.125rem] w-[90%] sm:w-[34.375rem] h-[10.875rem] flex flex-col justify-center gap-[0.5rem]">
              <p className="text-[1rem] tracking-[0.063rem]">CREATE PLAYLIST</p>
              <p className="text-[0.75rem] pr-[0.625rem]">
                Share in a constantly expanding mix of african music from
                emerging and major artists around the world.
              </p>
              <button className="bg-[#171719] text-white font-light rounded-[0.25rem] mt-2 px-[1.5rem] py-[0.5rem] tracking-wider w-[8.5rem] h-[2.5rem] text-[0.75rem]">
                <Link to="/signup">Sign up for free</Link>
              </button>
            </div>
            <div className="ml-5 sm:ml-[7.313rem] mt-[3.375rem] bg-[#14F195] pl-[1.5rem] pr-[0.5rem] sm:pr-[1.5rem] py-[2rem] rounded-[0.125rem] w-[90%] sm:w-[34.375rem] h-[10.875rem] flex flex-col justify-center gap-[0.5rem]">
              <p className="text-[1rem] tracking-[0.188rem]">
                UPLOAD YOUR OWN MUSIC
              </p>
              <p className="text-[0.75rem] pr-[0.625rem]">
                Share in a constantly expanding mix of african music from
                emerging and major artists around the world.
              </p>
              <button className="bg-[#171719] text-white font-light rounded-[0.25rem] mt-2 px-[1.25rem] py-[0.5rem] tracking-wider w-[9.25rem] h-[2.5rem] text-[0.75rem]">
                <Link to="/uploadsong">Share your sound</Link>
              </button>
            </div>
          </article>
          <aside className="mt-5 sm:-mt-[7.5rem]">
            <img src={Unsplash2} height={1160} className="" alt="" />
          </aside>
        </section>
      </section>
      <section className="bg-[#36363A] pl-[7rem] pt-[9.25rem] pb-[13.563rem]">
        <p
          className="text=[2rem] sm:text-[3.5rem] text-[#FCFCFC] w-[70%] h-[13.5rem] leading-[4.5rem]"
          style={{
            dropShadow: '0 5px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          Seamlessly listen to music you love. Download the Hafrikplay app for
          your Device.
        </p>
        <div className="flex gap-[2.5rem] mt-[3.5rem] ">
          <a href="#">
            <img
              src={Apple}
              alt="app-store"
              className="w-[10.25rem] h-[3.188rem]
           "
            />
          </a>
          <a href="#">
            <img
              src={Google}
              alt="google-play"
              className="w-[10.25rem] h-[3.188rem]"
              loading="lazy"
            />
          </a>
        </div>
      </section>
    </>
  );
};
export default Homebody;
