import { TitleIntroductionV2 } from "../Work/components/titleIntroductionV2";
import "./contact.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { GithubIcon, Instagram, LinkedinIcon, TwitterIcon } from "lucide-react";

export function ContactPortfolio() {
  const [inputValues, setInputValues] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [tooltipActive, setTooltipActive] = useState(false);

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

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (newErrors[inputName]) {
        delete newErrors[inputName]; // Eliminar el error para ese campo
      }
      return newErrors;
    });
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
            setSuccessMessage("Mensaje Enviado... 🚀");
            setTooltipActive(true);
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

  // Ocultar tooltip automáticamente después de 3 segundos
  useEffect(() => {
    if (tooltipActive) {
      const timer = setTimeout(() => {
        setTooltipActive(false); // Desactiva el tooltip
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [tooltipActive]);

  return (
    <>
      <section className="content__all--contactPortfolio">
        <div className="proyectPortfolio-bx-titleProyects">
          <TitleIntroductionV2 title={"Contacto"} />
        </div>

        <article className="content_description-and-form">
          <section className="bx-introduction--contactPortfolio">
            <h2 className="title-likeMeJob">¿Te ha gustado mi trabajo?</h2>
            <span className="myText-contactPortfolio">
              “Tu opinión es importante para mí. Si te ha gustado mi portafolio
              o te gustaría discutir una posible colaboración, ¡contáctame!
              Estoy a tu disposición”
            </span>

            <section className="bx-networdSocial">
              <div className="bx-iconsSocial">
                <section className="content--tooltip-and-iconsSocial">
                  <div className="iconsSocial">
                    <Instagram />
                  </div>
                  <span className="tooltipIconsSocial">Instagram</span>
                </section>

                <section className="content--tooltip-and-iconsSocial">
                  <div className="iconsSocial">
                    <LinkedinIcon />
                  </div>
                  <span className="tooltipIconsSocial">Linkedin</span>
                </section>

                <section className="content--tooltip-and-iconsSocial">
                  <div className="iconsSocial">
                    <GithubIcon />
                  </div>
                  <span className="tooltipIconsSocial">Github</span>
                </section>

                <section className="content--tooltip-and-iconsSocial">
                  <div className="iconsSocial">
                    <TwitterIcon />
                  </div>
                  <span className="tooltipIconsSocial">X</span>
                </section>
              </div>
            </section>
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
            </div>
          </form>
          {successMessage && (
            <div
              className={`success-message ${
                tooltipActive ? "activeTooltip-success-msg" : "disableTooltip"
              }`}
            >
              {successMessage}
            </div>
          )}
        </article>
      </section>
    </>
  );
}
