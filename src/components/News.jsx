import React from "react";
import { data } from "../constant/data";
import frameImg from "../images/Frame2.png";

const News = () => {
  return (
    <div className="w-full h-full bg-news_background bg-cover bg-repeat-y flex flex-col items-center justify-center pt-8 md:pt-16 ">
      <div>
        <h1 className="font-Cinzel mt-10 font-bold text-3xl pb-5 lg:text-4xl ">News</h1>
        {/* Use map to render a list of news items from data */}
        {data.map(({ image, title, date, description, link }, key) => (
          <div
            key={key}
            className={`flex flex-col items-center justify-center p-4 ${
              key % 2 === 0 ? 'lg:flex lg:flex-row-reverse lg:text-justify' : 'lg:flex lg:flex-row lg:text-justify'
            }`}
          >
            <div className="relative">
              {/* Use frameImg as a background for the news image */}
              <img className="absolute top-0 left-0 w-[200px] p-[8px]" src={image} alt="" />
              <img className="relative w-[200px] h-[114px] z-10" src={frameImg} alt="" />
            </div>
            <aside className="w-full p-5 md:w-[50%]">
              <p className="font-Cinzel font-bold text-[15px] lg:text-[20px]">{title}</p>
              <p className="font-Noto text-[11px] lg:text-[13px]">{date}</p>
              <p className="font-Press2P font-semibold text-[14px] lg:text-[14px] p-4 md:pl-0 pr-0">
                {description}
                <a className="text-slate-500 font-medium hover:text-yellow-500" href={link}>
                  Read More
                </a>
              </p>
            </aside>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
