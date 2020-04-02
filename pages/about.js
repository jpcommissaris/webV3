import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Joke from '../component/Joke'
import Links from '../component/Links'
import Container from 'react-bootstrap/Container';

class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = { joke: 'loading...' }
    }

    render() {
        // https://icanhazdadjoke.com/api (where the jokes come from)
        return (
            <div >
                <Container>
                <NavBar /> 
                <div id="home">
                    <h2>Jokes</h2>
                </div>
                <Links />
                <Footer />
                </Container>
            </div>
        )
    }
}

export default About;
