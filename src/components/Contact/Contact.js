import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact p-5">
            <Container className="p-5">
                <Form>
                    <Form.Group className="mb-3 w-50 form-group" >
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 form-group" >
                        <Form.Control type="email" placeholder="Enter Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 form-group" >
                        <Form.Control type="number" placeholder="Enter Your Mobile Number" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 form-group" >
                        <Form.Control type="text" placeholder="Enter Your Message" />
                    </Form.Group>

                    
                    <button className="button">Submit</button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;