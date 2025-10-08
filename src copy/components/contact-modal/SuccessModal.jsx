import React from "react";
import "./modal.scss";

const successModal = (props) => (
  <div className="sucess__modal">
    <p>¡Mensaje recibido!</p>
    <p>
    ¡Gracias por contactarnos! Hemos enviado un mensaje de confirmación a tu bandeja de correo. Pronto nos pondremos en contacto contigo.
    </p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>Ok</p>
    </div>
  </div>
);

export default successModal;
