import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

//social media icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(){
    return (
        // link to icons https://fontawesome.com/icons?d=gallery&q=github
        <div>
        <Container >
        <Container className="footer">
           <Row>
                <Col sm={8}>
                    <p id="contact"> jpcommissaris@gmail.com  &nbsp;  650-867-8425   </p>
                </Col>
                <Col id="media" sm={4} >
                    <div style={{float: 'right'}}>
                    <a href="https://github.com/jpcommissaris" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon  className="fa" icon={['fab', 'github']} /> 
                    </a>
                    <a href="https://www.linkedin.com/in/julian-c-87a374177/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="li" icon={['fab', 'linkedin']} /> 
                    </a>
                    <a href="https://www.facebook.com/julian.commissaris.5" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fa" icon={['fab', 'facebook']} /> 
                    </a>
                    </div>  
                </Col>
            </Row>
        </Container>
        </Container>
        </div>
    )
}

export default Footer

//styles

