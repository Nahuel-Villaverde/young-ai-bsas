import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ConoceMas.css";

const videos = [{ id: "PgMwpmldJVA" }, { id: "ddbEg_pB0tQ" }, { id: "" }];

export default function ConoceMas() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const openModal = (videoId) => {
    setSelectedVideo(videoId);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  const getSlideClass = (index) => {
    const centerIndex = (activeIndex + 1) % videos.length;
    return index === centerIndex
      ? "main-slide bordered-glow"
      : "side-slide fade-edge";
  };

  const handleSlideClick = (index, videoId) => {
    const centerIndex = (activeIndex + 1) % videos.length;
    if (index === centerIndex) {
      openModal(videoId);
    } else {
      swiperRef.current.slideToLoop(index); // desplaza ese slide al centro
    }
  };

  return (
    <div className="conoce-section">
      <h2 className="title" id="conoceMasTitle">
        Conocé más
      </h2>
      <div className="conoceSwiper">
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={`${video.id}-${index}`}>
              <div
                className="slide-wrapper"
                onClick={() => handleSlideClick(index, video.id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`Video ${video.id}`}
                  className={getSlideClass(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="fade-mask left animated-mask"></div>
        <div className="fade-mask right animated-mask"></div>
      </div>

      {showModal && (
        <div className="video-modal fade-in" onClick={closeModal}>
          <div
            className="modal-content animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
