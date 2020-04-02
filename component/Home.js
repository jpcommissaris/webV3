import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'



function Home(){

    return (
        <div>
            <Container >
                <div style={{backgroundColor: 'white' }}>
                <p></p>
                <div id="home" >
                    <div id="text">
                        <h2>Home Header</h2>
                        <p >Home screen picture ideas: arms crossed, gd: me next to cpu with game running</p>
                        <p >About picture ideas: basketball shot, golf, playing cards, on the beach (spikeball?)</p>
                    </div>
                </div>
                </div>
            </Container>
            <Container   >
                <CardDeck >
                    <a className="card" href="/about" >
                    <Card className="bg-dark text-white" style={{ width: '100%', margin: '0'}}>
                            <Card.Img  src= "/about.jpeg" />
                            <Card.Body>
                                <Card.Title >About Me</Card.Title>
                                <Card.Text>
                                   Learn 
                                </Card.Text>
                            </Card.Body>
                        
                    </Card>
                    </a>
                    <a className="card" href="/projects" >
                    <Card className="bg-dark text-white" style={{ width: '100%', margin: '0'}}>
                            <Card.Img  src= "/projects.jpeg" />
                            <Card.Body>
                                <Card.Title >Projects</Card.Title>
                                <Card.Text>
                                    Check out some of my CS projects
                                </Card.Text>
                            </Card.Body>
                            
                        
                    </Card>
                    </a>
                    <a className="card" href="/gamedesign" >
                    <Card className="bg-dark text-white" style={{ width: '100%', margin: '0'}}>
                            <Card.Img  src= "/gd.jpeg" />
                            <Card.Body>
                                <Card.Title>Game Design</Card.Title>
                                <Card.Text>
                                    Check out some of the games I have built 
                                </Card.Text>
                            </Card.Body>
                        
                    </Card>
                    </a>
                </CardDeck>
               
            </Container>
        </div>

    )
} export default Home; 