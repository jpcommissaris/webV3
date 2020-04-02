import React from "react"
import NavBar from './NavBar'
import Video from './Video'
import Footer from './Footer'
//import SnakeApplet from "../component/SnakeApp";
import Container from 'react-bootstrap/Container';

// resume page Layout
class Snake extends React.Component{

    render(){
        return (
            <div >
                <Container>
                <h2>Snake: </h2>
                <p>This project is a snake game where two players battle to become the largest snake and trap their opponent. 
                    Any player to touch the wall, themselves, or the enemy snake, dies and a point is awarded to the opponent. </p>
                <Video name = {'snake'} width={'490px'} height={'400px'} header = {'Snake Video 2-players'}/>
                <div style = {{'marginTop':'10px' , 'textAlign': 'center'}}>
                    <a 
                        href='https://github.com/jpcommissaris/pySnake' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    > Click here for the github repo </a>
                </div>
                
                <h4>Functionality: </h4>
                <p>This game is coded in Python using the Pygame module. There is a Snake class that handles the snake&rsquo;s size and position, and a Board class that handles snake movement on the board. The driver class repaints the board and calls the move function.  </p><br/>
                <p>Inside the board class, there is a method called <code>drawBoard()</code> that repeatedly is called, moving the snakes, checking for changes in direction, and checking for collisions. The snakes move within a 2D NumPy Array, where a number within the array represents the presence of a piece of the snake (or the lack of a snake, or food). </p><br/>
                <p>Collisions are handled by checking if a spot in the board is about to be occupied by both snakes. Directions are handled by repeatedly checking for keyboard input (player 1 is ASDW, player 2 is arrow keys). The game will not allow you to change direction 180&deg; as this would cause you to immediately die (run back into yourself). </p><br/>
                <p>The game loops, changing score each time a player dies. <br /></p>
                
                </Container>
            </div>
            // CHANGE THE DESCRIPTION TO FUNCTIONALITY/FEATURES^^^
        )
    }
    
}
export default Snake