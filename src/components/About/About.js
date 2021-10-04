import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/about.jpg'
import './About.css'
const About = () => {
    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col lg={6}>
                        <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col lg={6}>
                        <h2>About Us</h2>
                        <p className="about-description">Spoken English is becoming a key necessity for the students looking for study abroad. If you are planning to study in other country or already got an admission or working professional, at Reyna Overseas, we proffer experienced and expert Spoken English Coaching.Our excellent Spoken English program is specifically designed by comprehending the ability of all types of students and well efficient to make them confident and capable to speak in English. Our advanced coaching helps professionals, students, or everyone looking for getting proficiency in Spoken English.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;