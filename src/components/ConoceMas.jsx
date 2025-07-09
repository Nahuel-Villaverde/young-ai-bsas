import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ConoceMas.css';

const videos = [
  { id: 'PgMwpmldJVA' },
  { id: 'ddbEg_pB0tQ' },
];

export default function ConoceMas() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoId) => {
    setSelectedVideo(videoId);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // bloquear scroll
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'auto'; // restaurar scroll
  };

  return (
    <div className="conoce-section">
      <h2 className="title">Conocé más</h2>
      <div className="conoceSwiper">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <div
                className="slide-wrapper"
                onClick={() => index === activeIndex && openModal(video.id)}
                style={{ cursor: index === activeIndex ? 'pointer' : 'default' }}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`Video ${video.id}`}
                  className={
                    index === activeIndex
                      ? 'main-slide bordered-glow'
                      : 'side-slide fade-edge'
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="fade-mask left animated-mask"></div>
        <div className="fade-mask right animated-mask"></div>
      </div>

      {showModal && (
        <div className="video-modal">
          <div className="modal-content animate-in" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
