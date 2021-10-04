import React from 'react';
import { Card, CardImg, Col, Container, Row, Button } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {title, img, description, price} = props.service;
    return (
        <div className="service-card">
            
                <Card className="card m-3">
                    <img src={img} alt="" className="image" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h6>Price: {price} tk</h6>
                        <button className="button">Apply This Service</button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Service;