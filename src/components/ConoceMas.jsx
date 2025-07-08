import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ConoceMas.css';

const videos = [
  { id: '0', url: 'https://img.youtube.com/vi/ddbEg_pB0tQ/hqdefault.jpg' },
];

export default function ConoceMas() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="conoce-section">
      <h2 className="title">Conocé más</h2>
      <div className="conoceSwiper">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <div className="slide-wrapper">
                <img
                  src={video.url}
                  alt={`Video ${video.id}`}
                  className={
                    index === activeIndex ? 'main-slide' : 'side-slide fade-edge'
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="fade-mask left"></div>
        <div className="fade-mask right"></div>
      </div>
    </div>
  );
}
