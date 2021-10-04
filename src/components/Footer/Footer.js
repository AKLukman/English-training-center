import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="w-25 sub-footer">
                    <input className="me-3" type="text" />
                    <Button className="button">Subscribe</Button>
                </div>

            </Container>


            <p className="p1">All Copyright &copy; Reserved 2021</p>
        </div>
    );
};

export default Footer;