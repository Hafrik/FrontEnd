import Card2 from '../home-images/card-2.png';
import Card3 from '../home-images/card-3.png';
import Unsplash2 from '../home-images/unsplash-2.png';
import Apple from '../home-images/app-store.png';
import Google from '../home-images/google-play.png';
import { Link } from 'react-router-dom';

const Homebody = () => {
  return (
    <>
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
    </>
  );
};
export default Homebody;
