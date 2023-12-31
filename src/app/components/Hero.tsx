import Image from 'next/image';
import React from 'react';
import Clips from './utils/Clips';
import SocialIcons from './utils/SocialIcons';

interface HeroProps {
  heroapi: {
    title: string;
    subtitle: string;
    btntext: string;
    img: string;
    sociallinks: { icon: any }[];
    videos: { imgsrc: string; clip: string }[];
  };
}

const Hero: React.FC<HeroProps> = ({ heroapi }) => {
  return (
    <>
      {/* Outermost div */}
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {heroapi.title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {heroapi.subtitle}
            </h1>

            {/* Explore button */}
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-10"
            >
              {heroapi.btntext}
            </button>

            {/* Videos */}
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {heroapi.videos?.map((video, index) => (
                <Clips key={index} clip={video.clip} imgsrc={video.imgsrc} />
              ))}
            </div>

            {/* Social icons */}
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {heroapi.sociallinks?.map((val, i) => {
                return <SocialIcons key={i} icon={val.icon} />;
              })}
            </div>
          </div>
          <div>
            <Image
              src={heroapi.img}
              alt=""
              className=" w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
              width={1000} // Set the width of the image
              height={600} //
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
