import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Contacto.css";

function Contacto() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Enviar el correo usando EmailJS
    emailjs
      .sendForm("service_s7jwf3r", "template_g1oaig8", "#contactForm", "KuRTTgtRMJAHGNlQA")
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          alert("Mensaje enviado con éxito.");
        },
        (error) => {
          console.log("Error al enviar el correo:", error.text);
          alert("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">¿Tienes preguntas <span className="block">o quieres unirte?</span></h2>
          <h3 className="contact-subtitle">Si quieres saber más sobre Young AI Leaders, colaborar en un proyecto o postularte como miembro, estamos aquí para ayudarte.</h3>
          <span className="contact-span">Más de 100 jóvenes líderes en IA colaborando en <br /> <span className="multicolor">proyectos globales.</span></span>
          <div className="contact-icons">
            <a href="mailto:buenosaireshub.youngaileaders@gmail.com" className="icon gmail-icon">
              <img src="/gmail.webp" alt="Imagen con redirección a Gmail" />
            </a>
            <a href="https://www.linkedin.com/company/young-ai-leaders-buenos-aires-hub/" target="_blank" rel="noopener noreferrer" className="icon linkedin-icon">
              <img src="/linkedin.webp" alt="Imagen con redirección a LinkedIn" />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h3 className="form-title">Envíanos tu Mensaje</h3>
          <form onSubmit={handleSubmit(onSubmit)} id="contactForm" className="contact-form">
            <input
              type="text"
              name="from_name"
              placeholder="Nombre"
              {...register("from_name", { required: "El nombre es obligatorio" })}
              className="form-input"
            />
            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" }
              })}
              className="form-input"
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}

            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              {...register("message", { required: "El mensaje no puede estar vacío" })}
              className="form-textarea"
            />
            {errors.mensaje && <span className="error-message">{errors.mensaje.message}</span>}

            <button type="submit" className="submit-button">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
