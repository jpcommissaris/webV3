import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'; 


function About() {
    return (
        <Container>
            <Row>
            <Col>
                <p>About page</p>
                <a href="/"> route to home</a>
            </Col>
            <Col>
                <Card className="bg-dark text-white" style={{ margin: '0'}}>
                <Card.Body>
                    <Card.Title >This is a react bootstrap card</Card.Title>
                    <Card.Text>
                        Hello World
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
    )
} 
export default About