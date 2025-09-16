import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01-01.png";
import Person02 from "../../assets/about/person02-02.png";

const about = () => (
  <>
  <div id="about">
    <div className="wrapper">
      <Title title="¿Cómo funciona?" />
      <p className="font12">
                  Conecta con tu audiencia sin que pasen tus anuncios por alto. Coloca tu marca al frente, genera recordación y destaca con contenido que realmente impacta. 
  Si eres socio conductor, ofrece entretenimiento, mejora la experiencia a bordo y aumenta tus posibilidades de recibir propinas.<br></br>
      </p>
      <Row> 
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Haz Visible Tu Negocio" job="Conecta con clientes potenciales de forma efectiva." />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox  avatar={Person02} name="Impulsa Tu Presencia" job="Alcanza a los clientes que realmente importan" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
  <div id="about">
    <div className="wrapper">
      <Title title="¿Por qué nosotros?" />
      <p className="font12">
      Descubre una nueva forma de conectar con tu audiencia, evitando que se salten anuncios como en redes sociales y que lo unico que este defrente seas tu. Impulsa tu marca y destaca entre la multitud con publicidad que realmente impacta. ¡Haz que tu negocio sea inolvidable y lleva tu presencia al siguiente nivel!
      </p>
      <ul className="reasons-list">
        <li>Publicidad dirigida a clientes potenciales.</li>
        <li>Incrementa la visibilidad de tu negocio.</li>
        <li>Fácil implementación y seguimiento.</li>
        <li>Resultados medibles y efectivos.</li>
      </ul>
  
    </div>
  </div>
  </>
);

export default about;
