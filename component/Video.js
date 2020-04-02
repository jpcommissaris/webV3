import React from "react"


//a switch case to load any video depending on its name 
function getVideo(props){
    console.log(props)
    switch(props.name) {
        case 'snake':
          return '/snake_final.mp4'
        case 'playlist':
          return '/playlist.mp4'
        default:
            return '/sample_movie.mp4'
    }
}

//Loads a video @params: height, width, name, header
function Video(props){
    const vid = getVideo(props)
    return (
    <div > 
        <h3 style={{'marginBottom': '12px', 'textAlign': 'center', 'fontSize': '18px'}}>
            {props.header} 
        </h3>
        <video className="video" width={props.width} height={props.height} controls muted autoPlay loop>
            <source src={vid} type={"video/mp4"} />   
            Your browser does not support mp4.
        </video>
    </div>
    )
} export default Video

