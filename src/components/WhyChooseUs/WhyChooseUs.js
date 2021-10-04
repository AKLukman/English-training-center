import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const WhyChooseUs = () => {
    return (
        <div>
            <Container className="p-5">
                <Row>
                    <h1 className="mb-4">WHY CHOOSE US?</h1>
                    <Col  xs={12} md={4}>
                        <Card className="p-5">
                            <h3>Quick Results</h3>
                            <p>Get quick and guaranteed results with the best teachers.</p>
                       </Card>
                    </Col>
                    <Col  xs={12} md={4}>
                        <Card className="p-5">
                            <h3>Save Money</h3>
                            <p>You can save a lot of money on our lessons & resources.</p>
                        </Card>
                    </Col>
                    <Col  xs={12} md={4}>
                        <Card className="p-5">
                            <h3>Get Support </h3>
                            <p>Our staff and teachers are always ready to help you.</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyChooseUs;