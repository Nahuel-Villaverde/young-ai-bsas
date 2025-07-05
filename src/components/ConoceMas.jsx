import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ConoceMas.css';

const videos = [
  { id: '0', url: 'https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg' },
  { id: '1', url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
  { id: '2', url: 'https://img.youtube.com/vi/3tmd-ClpJxA/hqdefault.jpg' },
  { id: '3', url: 'https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg' },
  { id: '4', url: 'https://img.youtube.com/vi/tVj0ZTS4WF4/hqdefault.jpg' },
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
                    index === activeIndex ? 'main-slide' : 'side-slide'
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
