import React, { useEffect, useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './Home.css'
const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`./database.JSON`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="home-header text-white">
                <h5>Our language center offers group and personal lessons in English and other modern languages for all ages and levels of knowledge.</h5>
                <h1>IMPROVE YOUR ENGLISH SKILL WITH English Training Center</h1>
            </div>
            <WhyChooseUs></WhyChooseUs>
            <Container className="py-5">
                <h1> OUR SERVICES</h1>
                <div className="service">

                    {
                        services.map(service =>
                            <Service
                                key={service.key}
                                service={service}
                            ></Service>
                        )
                    }

                </div>
            </Container>







        </div>
    );
};

export default Home;