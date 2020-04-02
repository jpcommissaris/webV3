import React from "react"

function GithubLink(props){
    return (
        <div style = {{'marginTop':'10px' , 'textAlign': 'center'}}>
            <a 
                href={props.link}
                target="_blank" 
                rel="noopener noreferrer"
            > Click here for the GitHub repo </a>
        </div>

    )
}

export default GithubLink

