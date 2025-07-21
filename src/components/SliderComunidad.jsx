import { useRef, useState } from "react";
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
    nombre: "Mathias Ramos Cuñarro",
    img: "/Mathias-Ramos-Cuñarro.webp",
    linkedin: "https://www.linkedin.com/in/mathiasramosc/",
  },
  {
    id: 3,
    nombre: "Lucía Scorzelli",
    img: "/Lucía-Scorzelli.webp",
    linkedin:
      "https://www.linkedin.com/in/lucia-scorzelli-vald%C3%A9s-09398a233/",
  },
  {
    id: 4,
    nombre: "Nicolas Massucci",
    img: "/Nicolas-Massucci.webp",
    linkedin: "https://www.linkedin.com/in/nicolasmassucci/",
  },
  {
    id: 5,
    nombre: "Milagros Singer",
    img: "/Milagros-Singer.webp",
    linkedin: "https://www.linkedin.com/in/milagros-singer-gonzalez/",
  },
  {
    id: 6,
    nombre: "Candela Sosa Medina",
    img: "/Candela-Sosa-Medina.webp",
    linkedin: "https://www.linkedin.com/in/candela-sosa-medina-618224354/",
  },
  {
    id: 7,
    nombre: "Rocío Palacín",
    img: "/Rocío-Palacín.webp",
    linkedin: "https://www.linkedin.com/in/roc%C3%ADo-palac%C3%ADn-roitbarg/",
  },
  {
    id: 8,
    nombre: "Camila Lescano",
    img: "/Camila-Lescano.webp",
    linkedin: "https://www.linkedin.com/in/camilaagostinalescano/",
  },
  {
    id: 9,
    nombre: "Camila Valenzuela",
    img: "/Camila-Valenzuela.webp",
    linkedin: "https://www.linkedin.com/in/camila-valenzuela-8a045b15a/",
  },
  {
    id: 10,
    nombre: "Yago Zaragoza",
    img: "/Yago-Zaragoza.webp",
    linkedin: "https://www.linkedin.com/in/yago-zaragoza-79353b296/",
  },
  {
    id: 11,
    nombre: "Trinidad Reynoso",
    img: "/Trinidad-Reynoso.webp",
    linkedin:
      "https://www.linkedin.com/in/trinidad-reynoso-castillo-a9b3481b4/",
  },
  {
    id: 12,
    nombre: "Clara Acosta",
    img: "/Clara-Acosta.webp",
    linkedin: "https://www.linkedin.com/in/clara-acosta-48bbbb206/",
  },
  {
    id: 13,
    nombre: "Chris Harumi",
    img: "/Chris-Harumi.webp",
    linkedin: "https://www.linkedin.com/in/iamchrisharumi/",
  },
  {
    id: 14,
    nombre: "Lourdes Rivoira",
    img: "/Lourdes-Rivoira.webp",
    linkedin: "",
  },
  {
    id: 15,
    nombre: "Milena Maceiras",
    img: "/Milena-Maceiras.webp",
    linkedin: "https://www.linkedin.com/in/milena-maceiras/",
  },
  {
    id: 16,
    nombre: "Valentina Arbarello",
    img: "/Valentina-Albarello.webp",
    linkedin: "https://www.linkedin.com/in/valentina-arbarello-baa963246/",
  },
  {
    id: 17,
    nombre: "Lucía Demeco",
    img: "/Lucía-Demeco.webp",
    linkedin: "https://www.linkedin.com/in/lucia-demeco/",
  },
  {
    id: 18,
    nombre: "Julián Balbarrey Harguindeguy",
    img: "/Julian-Balbarrey-Harguindeguy.webp",
    linkedin:
      "https://www.linkedin.com/in/juli%C3%A1n-balbarrey-harguindeguy-588b331b5/",
  },
];

function SliderComunidad() {
  const [verMas, setVerMas] = useState(false);
  const [animando, setAnimando] = useState(false);
  const [animClass, setAnimClass] = useState("");

  const sectionRef = useRef(null);

  const primeraFila = miembros.slice(0, 4);
  const extras = miembros.slice(4);

  const handleToggle = () => {
    if (verMas) {
      // ▶ Animar salida en reversa
      setAnimClass("fadeOutDown");
      setAnimando(true);

      // ▶ Scroll ajustado para dejar el título arriba
      const offsetTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      // ▶ Esperar animación para desmontar
      const total = extras.length * 50 + 400;
      setTimeout(() => {
        setVerMas(false);
        setAnimando(false);
        setAnimClass("");
      }, total);
    } else {
      // ▶ Animar entrada
      setVerMas(true);
      setAnimClass("fadeInUp");
      setAnimando(true);

      const total = extras.length * 50 + 400;
      setTimeout(() => setAnimando(false), total);
    }
  };

  return (
    <section ref={sectionRef} className="slidercomunidad-section">
      <h2 className="otrosMiembrosTitle">Otros miembros</h2>

      <div className="gridMiembros">
        {/* Primera fila */}
        {primeraFila.map((m) => (
          <Card key={m.id} miembro={m} />
        ))}

        {/* Extras: animan entrada o salida */}
        {(verMas || animando) &&
          extras.map((m, i) => {
            const idx = animClass === "fadeOutDown" ? extras.length - 1 - i : i;

            return (
              <Card
                key={m.id}
                miembro={m}
                className={animClass}
                delay={idx * 0.05}
              />
            );
          })}
      </div>

      {/* Botón */}
      <div className="btnContainer">
        <button
          className="btnVerMas"
          onClick={handleToggle}
          style={{
            opacity: animando ? 0 : 1,
            pointerEvents: animando ? "none" : "auto",
          }}
        >
          {verMas ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </section>
  );
}

function Card({ miembro, className = "", delay = 0 }) {
  return (
    <div
      className={`cardSlider ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <img src={miembro.img} alt={miembro.nombre} />
      <div className="cardSlider-content">
        <h3>{miembro.nombre}</h3>
        <a
          href={miembro.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="icon_other linkedin-icon"
        >
          <img src="/linkedin.webp" alt={`LinkedIn de ${miembro.nombre}`} />
        </a>
      </div>
    </div>
  );
}

export default SliderComunidad;
