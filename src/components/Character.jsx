import { character } from "../constant/character";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
const Character = () => {
  return (
    <>
    
     {/* <div className="w-[100vw] h-[50vh] bg-news_background bg-cover bg-repeat-y flex flex-col items-center justify-center">Character</div> */}
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
  {character.map((items, key) => (
    <SwiperSlide className=" bg-news_background  w-[100vw] bg-cover bg-repeat-y" key={key}>
      <div className="title" data-swiper-parallax="-300">
      {items.category} 
      </div>
      
      <div className="subtitle flex flex-col-reverse items-center justify-center" data-swiper-parallax="-200">
      {items.name} 
      <img className="w-[200px] h-[200px]  rounded-full" src={items.image} alt="" />
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
        {items.description} 
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  </>
      
    )
}

export default Character