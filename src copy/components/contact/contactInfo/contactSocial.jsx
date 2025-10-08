import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social"
           onClick={() => window.open("https://wa.me/529983229903?text=Hola%Anunciandome.com%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n", "_blank")}>
          <img style={{width:"10rem"}} src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif" alt="whatsapp" />
        
        </Col>
        {/* <Col xs={12} lg={1} className="contact__social">
          <img src={TwitterIcons} alt="Twitter" />
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <img src={DribbleIcon} alt="Dribble" />
        </Col> */}
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
