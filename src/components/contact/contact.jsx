import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contact.scss";
import emailjs from '@emailjs/browser';
import Title from "../ui-components/title/title";
import ContactInfo from './contactInfo/contactInfo';
import ContactSocial from './contactInfo/contactSocial';
import Modal from '../contact-modal/Modal';

import ContactBackground from '../../assets/contact/bg-01-03.png';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sending: false,
      successModal: false,
      errorModal: false,
      whatsappNumber:""
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.whatsappNumber)
  };

  handleSubmit = (e) => {
    var self = this;
    this.setState({ sending: true });
    e.preventDefault();

    var template_params = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      whatsappNumber:this.state.whatsappNumber,
    };




    // YOUR EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
    let API_KEY = "iSOEtqdP8JgvaVcEY";

    // YOUR EMAIL.JS TEMPLATE ID
    let TEMPLATE_ID = "template_jxmexfm";




    emailjs.send("service_fm4s45f", TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        if (response.status === 200) {
          self.showSuccessModal();
        } else {
          self.showErrorModal();
        }
      },
      function (error) {
        console.log(error)
        self.showErrorModal();
      }
    );
  };

  // SUCCESS MODAL
  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };
  // ERROR MODAL
  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };
  // RESET CONTACT FORM
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  // CLOSE ALL MODALS
  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    let submitButtonRender = (
      <div className="small__button">
        <button aria-label="send message" type="submit" value="Send Message">
          Enviar 
        </button>
      </div>
    );
    if (this.state.sending) {
      submitButtonRender = (
        <div className="small__button sending-btn">
          <div className="flex-center">
            <div className="sbl-circ"></div>
          </div>
        </div>
      );
    }
    let modalRender = null;
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status="success" />;
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status="error" />;
    }
    return (
      <div id="contact">
        {modalRender}
        <div className="wrapper">
          <Title title="Contacto" />
          
          <p className="font12">
          ¿Tienes un negocio y quieres anunciarlo en nuestras pantallas?
¿Eres conductor y quieres ganar más con Anunciandome.com?

Estamos listos para escucharte y resolver tus dudas.
Escríbenos y uno de nuestros asesores te responderá a la brevedad.
          </p>

          <Row className="padding40">
            <Col md={12} lg={6}>
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <h4 className="font30 weight800 padding30">Déjanos tus datos y te contactaremos pronto</h4>
                <input type="text" placeholder="Nombre" required name="name" value={this.state.name} onChange={this.inputHandler} />
                <input type="email" placeholder="Correo electrónico" required name="email" value={this.state.email} onChange={this.inputHandler} />
              <input
                type="phone"
                placeholder="Ingresa tu número de WhatsApp"
                required
                name="whatsappNumber"
                value={this.state.whatsappNumber}
                onChange={this.inputHandler}
              />
                <textarea
                  rows="6"
                  cols="50"
                  placeholder="Cuentanos más de tu proyecto ó si te gustaría trabajar con nosotros"
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.inputHandler}
                ></textarea>
                {submitButtonRender}
              </form>
            </Col>
            <Col md={12} lg={6}>
              <div className="flex-center">
                <img src={ContactBackground} alt="contact background" />
              </div>
            </Col>
          </Row>
          <ContactInfo />
          <ContactSocial />
        </div>
      </div>
    );
  }
};

export default Contact;
