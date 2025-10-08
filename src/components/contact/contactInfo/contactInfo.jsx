import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg';
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        {/* <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon1}
            textLine1="1211 Awesome Avenue,"
            textLine2="NY USD"
          />
        </Col> */}
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon2}
            textLine1="WhatsApp"
            textLine2="+52 998 322 9903"
            onClick={() => window.open("https://wa.me/529983229903?text=Hola%Anunciandome.com%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n", "_blank")}
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          {/* <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine1="Correo Electrónico"
            textLine2="helpimpact360@gmail.com"
          /> */}
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
