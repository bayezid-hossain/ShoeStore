'use client';
import React from 'react';
import TitleText from './utils/TitleText';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ClockIcon, HashtagIcon, HeartIcon } from '@heroicons/react/24/solid';
import 'swiper/swiper-bundle.css';

import { truncate } from 'lodash';

interface News {
  title: string;
  text: string;
  time: string;
  img: string;
  like: string;
  by: string;
  url: string;
  btn: string;
}

interface StoriesProps {
  news: News[]; //news array
  title: string;
}

interface Props {
  story: StoriesProps;
}
const Stories: React.FC<Props> = ({ story: { title, news } }) => {
  return (
    <div>
      <div className="nike-container mb-11">
        <TitleText title={title} />
        <div className="mt-7">
          <Swiper
            className="px-10 mx-11"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
            }}
            navigation={{ enabled: true }}
            freeMode={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, FreeMode, Autoplay]}
          >
            {news.map((val, i) => {
              return (
                <SwiperSlide key={i} className="mb-0.5 ">
                  <div className="relative grid items-center gap-4 mx-16 lg:mx-12 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                    <div className="flex items-center justify-center">
                      <Image
                        src={val.img}
                        alt={`img/story/${i}`}
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                      />
                    </div>
                    <div className="flex items-center justify-between w-full px-4">
                      <div className="flex items-center gap-0.5">
                        <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                        <span className="text-xs font-bold">{val.like}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <ClockIcon className="icon-style w-4 h-4 text-black" />
                        <span className="text-xs font-bold">{val.time}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <HashtagIcon className="icon-style text-blue-600" />
                        <span className="text-xs font-bold text-blue-600">
                          {val.by}
                        </span>
                      </div>
                    </div>
                    <div className="grid items-center justify-items-start px-4">
                      <h1 className="text-base font-semibold lg:text-sm">
                        {val.title}
                      </h1>
                      <p className="text-sm text-justify lg:text-xs">
                        {truncate(val.text, { length: 150 })}
                      </p>
                    </div>
                    <div className="flex items-center justify-center px-4 w-full">
                      <a
                        href={val.url}
                        className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                        target="_blank"
                        role="button"
                      >
                        {val.btn}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Stories;
