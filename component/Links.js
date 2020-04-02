import React from "react"
import Container from 'react-bootstrap/Container';

function Links(){
    return (
        <div>
            <Container>
            <p style={{display: 'inline'}}>Traditional Resume: &nbsp; </p>
            <a style= {{display: 'inline'}} href='https://docs.google.com/document/d/1xtuIvlLc9bOn90d8SiSDcXkdzeSjGcXVCHB_wYWlVos/edit?usp=sharing' target="_blank" 
                        rel="noopener noreferrer"> View and download in Google Docs <br/></a>
            <p style={{display: 'inline'}}>Cover Letter: &nbsp; </p>
            <a style= {{display: 'inline'}} href='https://docs.google.com/document/d/1bw3cSivqWhjOOWaQ4LJEWlTgiSry81YBizPNlrIugCc/edit?usp=sharing' target="_blank" 
                        rel="noopener noreferrer"> View and download in Google Docs <br/></a>
            <p style={{display: 'inline'}}>GitHub: &nbsp; </p>
            <a style= {{display: 'inline'}} href='https://github.com/jpcommissaris' target="_blank" 
                        rel="noopener noreferrer"> My GitHub page<br/></a>
            </Container>
        </div>
    )
}

export default Links