import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/IMG_7381_Original.jpg"; 

export const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="about-photo">
            <img src={me} alt="Nupoor Korde portrait" />
          </Col>
          <Col md={7}>
            <h2>About Me</h2>
            <p>
            “Every interface tells a story - of how people interact with technology, how they solve problems, and how they feel while doing it. I build those stories into digital experiences that are clean, accessible, and resilient. My approach blends design sensibility with engineering discipline, ensuring that what looks simple on the surface is powered by performance and scalability underneath. To me, great frontend development isn’t about features alone, but about shaping experiences that truly resonate.”
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
