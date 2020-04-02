import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function Footer(){
    return (
        // link to icons https://fontawesome.com/icons?d=gallery&q=github
        <Container>
            <Navbar className="footer" expand="lg">
                <Col sm={8}>
                    <p id="contact"> jpcommissaris@gmail.com  &nbsp; &nbsp; 650-867-8425   </p>
                </Col>
                <Col id="media" sm={4}>
                    <a href="https://github.com/jpcommissaris" className="fa fa-github" 
                    target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.linkedin.com/in/julian-c-87a374177/" className="fa fa-linkedin"
                    target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.facebook.com/julian.commissaris.5" className="fa fa-facebook" 
                    target="_blank" rel="noopener noreferrer"></a>  
                </Col>
            </Navbar>
        </Container>
    )
}

export default Footer

//styles

