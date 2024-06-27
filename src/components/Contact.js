import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/master.png";
import 'animate.css';
import './style.css'
import master from '../assets/img/master1.svg';
import map from '../assets/img/map.png'
import mail from '../assets/img/mail.png'
import TrackVisibility from 'react-on-screen';
import { ParticlesContainer } from "./ParticlesContainer";
export const Contact = () => {
  // const formInitialDetails = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // }
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code == 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container className="range">
        <Row className="align-items-center">
          <Col size={12} md={5}>
            <TrackVisibility>
              <div className="stackup">
                <div id="rotate">
                  <img className="master" src={contactImg} alt="Contact Us"/>
                </div>
                <img className="logo_master" src={master} alt="Contact"/>
              </div>
            </TrackVisibility>
          </Col>
          <ParticlesContainer/>
          <Col size={12} md={7}>
            <TrackVisibility>
                <div className="down">
                <h3 className="contact_title">Contact</h3>
                <h2>Don't be shy! Hit me up! 👇</h2>
                  <Row className="contact__icons">
                    <Col size={12} sm={6} className="contact__icon-box">
                     <span><img src={map} alt="Map"/></span>
                      <div className="contact__info">
                          <h3>Location</h3>
                          <p>Quan 9,Ho Chi Minh</p>
                      </div>
                    </Col>
                    <Col size={12} sm={6} className="contact__icon-box">
                     <span><img src={mail} alt="Mail"/></span>
                     <div className="contact__info">
                      <h3>Mail</h3>
                      <a href="mailto:trungquyen2902@gmail.com" className="mail">trungquyen2902@gmail.com</a>
                     </div>
                    </Col>
                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col> */}
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
              
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
