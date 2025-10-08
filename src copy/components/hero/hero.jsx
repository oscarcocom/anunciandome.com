import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero-image-2.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">¡Hola!</h1>
            <h1 className="weight800 font30">
              Bienvenido a <span className="weight700 font30"> Anunciandome.com</span>
            </h1>
            <p className="font12">
              Convierte cada viaje en una oportunidad de negocio.
            </p>
            <Button label="CONTÁCTANOS" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="Imagen principal" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
