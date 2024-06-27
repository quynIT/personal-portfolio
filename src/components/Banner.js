import { useState, useEffect } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import hello1 from "../assets/img/hello.png";
import stack1 from "../assets/img/stack1.png";
import stack2 from "../assets/img/stack2.png";
import stack3 from "../assets/img/stack3.png";
import stack4 from "../assets/img/stack4.png";
import 'animate.css';
import './style.css'
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "React Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="align-bottom">
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h1><img id="hello" src={hello1} alt="Image"/>{`Front-End`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "React Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hi, I'm Trung Quyen. A passionate Front-end React Developer based in Ho Chi Minh City. 📍</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={2} className="align-bottom">
          </Col>
          <Col xs={12} md={6} xl={4} className="align-bottom">
            <TrackVisibility>
                <div className= "hero-container">
                  <div className="blob">
                  </div>
                </div>
            </TrackVisibility>
          </Col>
          <Stack className="skills">
            <p>Tech Stack</p>
                <div className="logos">
                  <ul>
                    <li><img id="hello" src={stack1} alt="Image"/></li>
                    <li><img id="hello" src={stack2} alt="Image"/></li>
                    <li><img id="hello" src={stack3} alt="Image"/></li>
                    <li><img id="hello" src={stack4} alt="Image"/></li>
                  </ul>
                </div>
              </Stack>
        </Row>

      </Container>
    </section>
  )
}
