import React from "react"

function Joke(props){

    return (
        <div>
            <h3 style= { {fontSize : "14px", display: !props.question && "none"} }>
            Question: {props.question}
            </h3>
            <h3 style= { {fontSize : "14px"} }>
            {props.answer} 
            </h3>
        </div>
    )

}

export default Joke 

