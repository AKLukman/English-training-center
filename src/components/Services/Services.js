import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayAllService from '../DisplayAllService/DisplayAllService';

const Services = () => {
    const [allServices, setAllServices] = useState([])
    useEffect( () => {
        fetch(`./database1.JSON`)
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            
            <Container>
                <Row>
                    {
                        allServices.map(allService => <DisplayAllService
                                                        key = {allServices.key}
                                                        allService = {allService}
                                                      ></DisplayAllService>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;