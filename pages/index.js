import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Home from '../component/Home'
import Links from '../component/Links'





// home page layout
class Index extends React.Component{

    constructor(props){
        super(props)
        this.state = {joke : 'loading...' }
    }
    

    render(){
        return (
            <div >
                <NavBar />
                <Home />
                <Footer /> 
            </div>
            )
    }
    
}

export default Index

