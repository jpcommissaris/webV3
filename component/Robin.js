import React from "react"
import NavBar from './NavBar'
import Video from './Video'
import AAPL from '../assets/AAPLstock.jpeg'
import GE from '../assets/GEstock.jpeg'
import Footer from './Footer'
import GithubLink from "./GithubLink";
import Container from 'react-bootstrap/Container';

// resume page Layout
class Robin extends React.Component{

    render(){
        const img_size = "260px"
        return (
            <div >
            <Container>
                <h2>Robinhood API: </h2>
                
                <p>This project is a Private API for Robinhood, a free stock trading service. Robinhood does not provide a public API, so I decided to make one. Here is an example where I &#8230;. </p>
                <GithubLink link= 'https://github.com/jpcommissaris/robinhood_api' />
                
                <h4>Functionality: </h4>
                <p>This project works using requests. The process is quite simple, find endpoints using developer tools, then programming GET/POST requests in Python. 
                    There is a <code>request_get()</code> and a <code>request_post()</code> method in the package. The requests send and receive Jsons from Robinhood and convert them into Python Dictionaries. There is also a <code>get_urls()</code> method, which holds a dictionary of all the Robinhood endpoints used in the package. </p>
                <h4>Logging In:</h4>
                <p>One of the biggest challenges is logging into Robinhood. Robinhood&rsquo;s API does not allow access to many of its endpoints (such as buy/sell) unless the client making a request is logged in. To create a persistent Login, I used sessions in Python. The login requires a username, password, and a unique device token which can be found using developer tools. </p>
                <h4>Features:</h4>
                <p>1) Calls to historical data like <code>get_3month_data(tick)</code> directly grabs the data Robinhood uses to create there visual graphs This data includes: market cap, high/low, open/close, and volume.<br />
                2) You can use the <code>order_market(tick, quantity, side=&rsquo;buy&rsquo;)</code> method to send a market buy or sell request to Robinhood. <br />
                3) The <em>method.py</em> file contains the main functionality of the package. It has easy to use methods that add a layer of abstraction to the project. These methods include: buy, sell, and graph. Below is an example of two graphs each created using the graph method:  
                <br /> </p>
                <div style={{textAlign: 'center'}}>
                    <img className="image1" src= {AAPL}  height={img_size} width={img_size} />
                    <img className="image1" src= {GE}  height={img_size} width={img_size} />
                </div> 
                <h4>Messenger Class:</h4>
                <p>This class allows the user to send a message to any phone number using IMessage or email. The <code>send_by_email(…)</code> allows you to send a message using Gmail. The <code>send_by_imessage(…)</code> tells your computer to open iMessage and send a text to any number. This method can be used to send yourself a conformation text each time you make an API call to robinhood</p>
                <h4>btc.py (bonus file):</h4>
                <p>This file doesn’t use the Robin package, rather it uses API calls to Coinbase to get current BTC data. The <code>get_btc_data()</code> returns a message with the current time, price, hour delta, and day delta. The <code>check()</code> method returns a message if important changes happen in the market. The messages returned can be sent with the messenger class. </p>
                <p>Over the summer, I deployed this script to <em>pythonanywhere.com</em>, which is a free website that allows 24/7 running of any python script. The program checked every 15 seconds for interesting updates in the market, and would send me a text message if there was.</p>
                </Container>
            </div>
            )
    }
    
}
export default Robin
