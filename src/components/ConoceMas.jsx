import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./ConoceMas.css";

const videos = [
  {
    id: "PgMwpmldJVA",
    desc: "Resumen del evento AI for Good: oportunidades e innovación con impacto global.",
  },
  {
    id: "ddbEg_pB0tQ",
    desc: "Primer debate regional sobre el impacto de la IA en América Latina y el Caribe.",
  },
];

export default function ConoceMas() {
  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const [video, setVideo] = useState(null);

  const openModal = (id) => {
    setVideo(id);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
      setVideo(null);
      document.body.style.overflow = "auto";
    }, 400);
  };

  return (
    <section id="idConoceMas" className="conoce-section">
      <h2 className="title">Conocé más</h2>
      <div className="conoceSwiper">
        <Swiper
          modules={[FreeMode]}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          onSlideChange={(s) => setActive(s.realIndex)}
          breakpoints={{
            0: {
              direction: "vertical",
              slidesPerView: 3,
              spaceBetween: 30,
            },
            780: {
              direction: "horizontal",
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {videos.map((v, i) => (
            <SwiperSlide key={i}>
              <SlideItem
                videoId={v.id}
                isActive={i === active}
                description={v.desc}
                onClick={() => i === active && openModal(v.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="fade-mask left animated-mask" />
        <div className="fade-mask right animated-mask" />
      </div>

      {showModal && (
        <div
          className={`video-modal ${closing ? "fade-out" : "fade-in"}`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${
              closing ? "animate-out" : "animate-in"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video}?autoplay=1`}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function SlideItem({ videoId, isActive, description, onClick }) {
  return (
    <div
      className={`slide-wrapper ${isActive ? "hoverable" : ""}`}
      onClick={onClick}
      style={{ cursor: isActive ? "pointer" : "default" }}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={`Video ${videoId}`}
        className={
          isActive ? "main-slide bordered-glow" : "side-slide fade-edge"
        }
      />
      {isActive && (
        <div className="hover-desc">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
