import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutContainer">
      <div class="container">
        <div class="item-1"></div>
        <div class="item-2">
          <h2 className="title">Nuestro Objetivo</h2>
          <p className="subtitle">
            Fomentar la colaboración y la innovación en IA para el bien social
          </p>
        </div>
        <div class="item-3">
          <p className="leftDescription">
            Conectamos a jóvenes apasionados por la IA para generar impacto
            real.
            <br />
            <div className="highlightContent">
              <span className="highlightOne">
                Aprende, colabora y transforma el
              </span>
              <span className="highlightTwo">futuro con innovación.</span>
            </div>
          </p>
          <button className="ctaButton">Conocer más</button>
        </div>
        <div class="item">
          <div className="cardHeader">
            <div className="iconContainer">
              <img
                src="/light_icon.png"
                alt="Icono de Innovación"
                className="cardIcon"
              />
            </div>
            <h3>Innovación con Impacto Social</h3>
          </div>
          <p className="cardDescription">
            Desarrollo de proyectos en IA alineados con los ODS de la ONU.
            Exploramos soluciones tecnológicas que aborden desafíos globales,
            asegurando que la inteligencia artificial tenga un impacto positivo
            en la sociedad.
          </p>
            <p className="cardNumber">01</p>
        </div>
        <div class="item">
          <div className="cardHeader">
            <div className="iconContainer">
              <img
                src="/world_icon.png"
                alt="Icono de Colaboración Global"
                className="cardIcon"
              />
            </div>
            <h3>Colaboración Global</h3>
          </div>
          <p className="cardDescription">
            Una red internacional de jóvenes líderes en IA. Facilitamos la
            cooperación entre distintos centros y regiones para potenciar la
            diversidad de ideas y la sinergia entre proyectos.
          </p>
            <p className="cardNumber cardNumber2">02</p>
        </div>
        <div class="item">
          <div className="cardHeader">
            <div className="iconContainer">
              <img
                src="/books_icon.png"
                alt="Icono de Formación y Crecimiento"
                className="cardIcon"
              />
            </div>
            <h3>Formación y Crecimiento</h3>
          </div>
          <p className="cardDescription">
            Acceso a recursos, mentorías y oportunidades educativas. Brindamos
            herramientas, guías y capacitaciones para que los miembros puedan
            desarrollar sus habilidades técnicas y de liderazgo en inteligencia
            artificial.
          </p>
            <p className="cardNumber">03</p>
        </div>
        <div class="item">
          <div className="cardHeader">
            <div className="iconContainer">
              <img
                src="/shake_hands_icon.png"
                alt="Icono Autonomía con Apoyo"
                className="cardIcon"
              />
            </div>
            <h3>Autonomía con Apoyo</h3>
          </div>
          <p className="cardDescription">
            Autogestión con apoyo estratégico de la UIT. Cada centro y líder
            tiene independencia en la ejecución de sus proyectos, con el
            respaldo de la UIT como entidad orientadora sin intervenir
            directamente en la gestión.
          </p>
            <p className="cardNumber">04</p>
        </div>
        <div class="item-3">
          <p className="leftDescription">
            <span className="highlightTitle">Rol de la UIT</span>
            <br />
            <div className="highlightContent">
              Proporcionar apoyo y asesoramiento sin intervenir en la gestión de
              los proyectos.
            </div>
          </p>
          <button className="ctaButton">Conocer más</button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
