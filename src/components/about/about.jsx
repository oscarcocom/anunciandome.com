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
      Ya seas negocio que quiere anunciarse o conductor que quiere ganar más con una pantalla, tus anuncios llegan a personas con alta intención. <br></br>
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
      Ya seas negocio que quiere anunciarse o conductor que quiere ganar más con una pantalla, tus anuncios llegan a personas con alta intención. <br></br>
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
