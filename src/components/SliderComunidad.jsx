import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "./SliderComunidad.css";

const miembros = [
  {
    id: 1,
    nombre: "Victoria Franco",
    img: "/Victoria-Franco.webp",
    linkedin: "https://www.linkedin.com/in/victoriafranco24/",
  },
  {
    id: 2,
    nombre: "Milagros Singer",
    img: "/Milagros-Singer.webp",
    linkedin: "https://www.linkedin.com/in/milagros-singer-gonzalez/",
  },
  {
    id: 3,
    nombre: "Mathias Ramos Cuñarro",
    img: "/Mathias-Ramos-Cuñarro.webp",
    linkedin: "https://www.linkedin.com/in/mathiasramosc/",
  },
  {
    id: 4,
    nombre: "Julián Asinsten",
    img: "/Julián-Asinsten.webp",
    linkedin: "https://www.linkedin.com/in/juli%C3%A1n-asinsten-247636261/",
  },
  {
    id: 5,
    nombre: "Lucía Scorzelli",
    img: "/Lucía-Scorzelli.webp",
    linkedin:
      "https://www.linkedin.com/in/lucia-scorzelli-vald%C3%A9s-09398a233/",
  },
  {
    id: 6,
    nombre: "Agustín Fernandes",
    img: "/Agustín-Fernandes.webp",
    linkedin: "https://www.linkedin.com/in/agustinjoelfernandescabal/",
  },
  {
    id: 7,
    nombre: "Candela Sosa Medina",
    img: "/Candela-Sosa-Medina.webp",
    linkedin: "https://www.linkedin.com/in/candela-sosa-medina-618224354/",
  },
  {
    id: 8,
    nombre: "Camila Lescano",
    img: "/Camila-Lescano.webp",
    linkedin: "https://www.linkedin.com/in/camilaagostinalescano/",
  },
  {
    id: 9,
    nombre: "Rocío Palacín",
    img: "/Rocío-Palacín.webp",
    linkedin: "https://www.linkedin.com/in/roc%C3%ADo-palac%C3%ADn-roitbarg/",
  },
  {
    id: 10,
    nombre: "Nicolas Massucci",
    img: "/Nicolas-Massucci.webp",
    linkedin: "https://www.linkedin.com/in/nicolasmassucci/",
  },
  {
    id: 11,
    nombre: "Camila Valenzuela",
    img: "/Camila-Valenzuela.webp",
    linkedin: "https://www.linkedin.com/in/camila-valenzuela-8a045b15a/",
  },
  {
    id: 12,
    nombre: "Yago Zaragoza",
    img: "/Yago-Zaragoza.webp",
    linkedin: "https://www.linkedin.com/in/yago-zaragoza-79353b296/",
  },
];

function SliderComunidad() {
  return (
    <section className="slidercomunidad-section">
      <h2 className="otrosMiembrosTitle">Otros miembros</h2>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={100}
        slidesPerView="auto"
        loop={true}
        freeMode={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={5000}
        freeModeMomentum={false}
        allowTouchMove={false}
        draggable={false}
        className="otrosMiembrosSlider"
      >
        {miembros.map((miembro, index) => (
          <SwiperSlide key={index} className="miembroSlide">
            <div className="cardSlider">
              <img src={miembro.img} alt={miembro.nombre} />
              <div className="cardSlider-content">
                <h3>{miembro.nombre}</h3>
                <a
                  href={miembro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon_other linkedin-icon"
                >
                  <img src="/linkedin.webp" alt="Icono de LinkedIn - Conectar con nosotros en LinkedIn" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SliderComunidad;