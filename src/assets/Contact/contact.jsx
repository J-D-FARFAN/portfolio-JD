import { TitleIntroductionV2 } from "../Work/components/titleIntroductionV2";
import "./contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // Importa EmailJS

export function ContactPortfolio() {
  const [inputValues, setInputValues] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito

  // Expresión regular para validar el email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFocus = (inputName) => {
    setInputValues((prev) => ({
      ...prev,
      [`${inputName}_focused`]: true,
    }));
  };

  const handleBlur = (inputName) => {
    setInputValues((prev) => ({
      ...prev,
      [`${inputName}_focused`]: false,
    }));
  };

  const handleChange = (inputName, value) => {
    setInputValues((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Verificar si los campos obligatorios están vacíos
    if (!inputValues.nombre.trim())
      newErrors.nombre = "El nombre es obligatorio.";
    if (!inputValues.apellido.trim())
      newErrors.apellido = "El apellido es obligatorio.";
    if (!inputValues.message.trim())
      newErrors.message = "El mensaje no puede estar vacío.";

    // Validación del correo
    if (!inputValues.correo.trim()) {
      newErrors.correo = "El correo es obligatorio.";
    } else if (!emailRegex.test(inputValues.correo)) {
      newErrors.correo = "El correo ingresado no es válido.";
    }

    setErrors(newErrors);

    // Si no hay errores, enviar el formulario
    if (Object.keys(newErrors).length === 0) {
      // Configuración para enviar el formulario con EmailJS
      emailjs
        .send(
          "service_s19jkfv",
          "template_2jf8pp9",
          {
            from_name: inputValues.nombre,
            from_last_name: inputValues.apellido,
            reply_to: inputValues.correo,
            message: inputValues.message,
          },
          "bsUdEZzlMPwapdsoQ"
        )
        .then(
          (response) => {
            console.log("Correo enviado con éxito:", response);
            setSuccessMessage("El formulario se envió correctamente.");
            setInputValues({
              nombre: "",
              apellido: "",
              correo: "",
              message: "",
            });
          },
          (error) => {
            console.error("Error al enviar el correo:", error);
            setErrors({ general: "Hubo un error al enviar el formulario." });
          }
        );
    }
  };

  const isActive = (inputName) => {
    return (
      inputValues[inputName]?.trim() || inputValues[`${inputName}_focused`]
    );
  };

  return (
    <>
      <article className="content__all--contactPortfolio">
        <div className="proyectPortfolio-bx-titleProyects">
          <TitleIntroductionV2 title={"Contacto"} />
        </div>

        <section className="bx-introduction--contactPortfolio">
          <h2 className="title-likeMeJob">¿Te ha gustado mi trabajo?</h2>
          <span className="myText-contactPortfolio">
            “Tu opinión es importante para mí. Si te ha gustado mi portafolio o
            te gustaría discutir una posible colaboración, ¡contáctame! Estoy a
            tu disposición”
          </span>
        </section>

        <form
          className="content__form-contactPortfolio"
          onSubmit={handleSubmit}
        >
          <article className="content-sections-name-email-message">
            <section className="bx-section-firsName--and--lastName">
              <div className="bx-label--and--inputs__contact-portfolio">
                <label htmlFor="nombre" className="labelInputs">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  className={`inputsForm ${
                    isActive("nombre") ? "input-active" : ""
                  } ${errors.nombre ? "input-error" : ""}`}
                  onFocus={() => handleFocus("nombre")}
                  onBlur={() => handleBlur("nombre")}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  value={inputValues.nombre}
                />
                {errors.nombre && (
                  <span className="error-message">{errors.nombre}</span>
                )}
              </div>
              <div className="bx-label--and--inputs__contact-portfolio">
                <label htmlFor="apellido" className="labelInputs">
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  className={`inputsForm ${
                    isActive("apellido") ? "input-active" : ""
                  } ${errors.apellido ? "input-error" : ""}`}
                  onFocus={() => handleFocus("apellido")}
                  onBlur={() => handleBlur("apellido")}
                  onChange={(e) => handleChange("apellido", e.target.value)}
                  value={inputValues.apellido}
                />
                {errors.apellido && (
                  <span className="error-message">{errors.apellido}</span>
                )}
              </div>
            </section>

            <div className="bx-label--and--inputs__contact-portfolio">
              <label htmlFor="correo" className="labelInputs">
                Correo
              </label>
              <input
                id="correo"
                type="email"
                className={`inputsForm ${
                  isActive("correo") ? "input-active" : ""
                } ${errors.correo ? "input-error" : ""}`}
                onFocus={() => handleFocus("correo")}
                onBlur={() => handleBlur("correo")}
                onChange={(e) => handleChange("correo", e.target.value)}
                value={inputValues.correo}
              />
              {errors.correo && (
                <span className="error-message">{errors.correo}</span>
              )}
            </div>

            <section className="bx-messageUsuary">
              <label htmlFor="message" className="labelInputs">
                Mensaje
              </label>
              <textarea
                id="message"
                className={`messageUsuary ${
                  isActive("message") ? "input-active" : ""
                } ${errors.message ? "input-error" : ""}`}
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
                onChange={(e) => handleChange("message", e.target.value)}
                value={inputValues.message}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </section>
          </article>

          <div className="bx-buttonSection">
            <button type="submit" className="submitMessage">
              Enviar
            </button>
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
        </form>
      </article>
    </>
  );
}
